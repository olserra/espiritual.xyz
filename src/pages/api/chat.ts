import { PINECONE_INDEX_NAME, PINECONE_NAME_SPACE } from "@/config/pinecone";
import { makeChain } from "@/utils/makechain";
import { initPinecone } from "@/utils/pinecone-client";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { PineconeStore } from "langchain/vectorstores/pinecone";
import { prisma } from "../../../prisma/prisma";

export const config = {
  runtime: "edge",
};

function createSSEMessage(data: any) {
  return `event: message \ndata: ${data}\n\n`;
}

export default async function handler(req: Request, res: any) {
  if (req.method == "POST") {
    try {
      const userId = req.headers.get("x-user-id");

      if (!userId || userId == "undefined") {
        return new Response("Unauthorized", {
          status: 401,
        });
      }
      const { question, history } = (await req.json()) as {
        question?: string;
        history?: string[];
      };
      if (!question) {
        return new Response("Missing question", {
          status: 400,
        });
      }

      try {
        const chatHistory = await prisma.chatHistory.findUnique({
          where: {
            userId: userId,
          },
        });

        const newStep = { type: "question", text: question };

        if (chatHistory) {
          // If chat history exists, update it with the new conversation step
          await prisma.chatHistory.update({
            where: {
              userId: userId,
            },
            data: {
              conversation: chatHistory.conversation
                ? {
                    push: { type: "question", text: question },
                  }
                : { set: [{ type: "question", text: question }] },
            },
          });
        } else {
          // If chat history doesn't exist, create a new record
          await prisma.chatHistory.create({
            data: {
              userId: userId,
              conversation: [newStep],
            },
          });
        }
      } catch (error) {
        console.log(error);
      }

      const pinecone = await initPinecone();
      const index = pinecone.Index(PINECONE_INDEX_NAME);
      const vectorStore = await PineconeStore.fromExistingIndex(
        new OpenAIEmbeddings({}),
        {
          pineconeIndex: index,
          textKey: "text",
          namespace: PINECONE_NAME_SPACE,
          filter: {
            userId: userId,
          },
        }
      );
      const chain = makeChain(vectorStore);
      const encoder = new TextEncoder();
      const readable = new ReadableStream({
        start(controller) {
          chain
            .call(
              {
                question: question,
                chat_history: history || [],
              },
              [
                {
                  handleLLMNewToken(token: string) {
                    try {
                      controller.enqueue(
                        encoder.encode(
                          createSSEMessage(
                            JSON.stringify({
                              type: "token",
                              text: token,
                            })
                          )
                        )
                      );
                    } catch (e) {
                      console.log(e);
                    }
                  },
                },
              ]
            )
            .then((response) => {
              try {
                controller.enqueue(
                  encoder.encode(
                    createSSEMessage(
                      JSON.stringify({
                        type: "response",
                        response,
                      })
                    )
                  )
                );
                controller.close();
              } catch (e) {
                console.log(e);
              }
            });
        },
      });

      return new Response(readable, {
        headers: {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          Connection: "keep-alive",
        },
      });
    } catch (error: any) {
      console.log("error", error);
      return new Response("Something went wrong", {
        status: 500,
      });
    }
  } else {
    return new Response("Method not allowed", {
      status: 405,
      headers: {
        Allow: "POST",
      },
    });
  }
}
