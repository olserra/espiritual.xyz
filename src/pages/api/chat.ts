import { Chroma } from "@langchain/community/vectorstores/chroma";
import { OpenAIEmbeddings } from "@langchain/openai";
import { prisma } from "../../../prisma/prisma";

export const config = {
  runtime: "edge",
};

// Define the collection name - this can also be an environment variable
const COLLECTION_NAME =
  process.env.CHROMA_COLLECTION_NAME || "default_collection";

// Additional Chroma configurations
const chromaConfig = {
  collectionName: COLLECTION_NAME,
  url: "http://localhost:8000", // Replace with your Chroma URL
  collectionMetadata: {
    "hnsw:space": "cosine", // Example configuration
  },
  // Include authentication configs if necessary
};

function createSSEMessage(data: any) {
  return `event: message \ndata: ${JSON.stringify(data)}\n\n`;
}

export default async function handler(req: Request, res: any) {
  if (req.method === "POST") {
    try {
      const userId = req.headers.get("x-user-id");
      const knowledgeBaseId = req.headers.get("x-knowledge-base-id");

      if (!userId || userId === "undefined" || !knowledgeBaseId) {
        return new Response("Unauthorized", { status: 401 });
      }

      const { question, history } = (await req.json()) as {
        question?: string;
        history?: string[];
      };

      if (!question) {
        return new Response("Missing question", { status: 400 });
      }

      // Find or create chat history for the specified knowledge base
      let chatHistory = await prisma.chatHistory.findFirst({
        where: {
          knowledgeBaseId: knowledgeBaseId,
        },
      });

      const newStep = { type: "question", text: question };

      if (chatHistory) {
        // Update existing chat history
        await prisma.chatHistory.update({
          where: { id: chatHistory.id },
          data: {
            conversation: { push: newStep },
          },
        });
      } else {
        // Create new chat history
        chatHistory = await prisma.chatHistory.create({
          data: {
            knowledgeBaseId: knowledgeBaseId,
            conversation: [newStep],
          },
        });
      }

      // Initialize Chroma Vector Store
      const embeddings = new OpenAIEmbeddings({});
      const vectorStore = new Chroma(embeddings, chromaConfig);

      // Example usage of vectorStore for a similarity search
      try {
        const searchResponse = await vectorStore.similaritySearch(question, 5); // Adjust the number 5 to the desired number of results
        // Process the searchResponse to format it as needed for your application
        const formattedResponse = searchResponse
          .map((doc) => doc.pageContent)
          .join("\n");

        return new Response(
          createSSEMessage({ type: "response", text: formattedResponse }),
          {
            headers: {
              "Content-Type": "text/event-stream",
              "Cache-Control": "no-cache",
              Connection: "keep-alive",
            },
          }
        );
      } catch (error) {
        console.error("Error during similarity search:", error);
        return new Response("Error processing your request", { status: 500 });
      }
    } catch (error: any) {
      console.log("error", error);
      return new Response("Something went wrong", { status: 500 });
    }
  } else {
    return new Response("Method not allowed", {
      status: 405,
      headers: { Allow: "POST" },
    });
  }
}
