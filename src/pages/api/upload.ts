import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { PineconeStore } from "langchain/vectorstores/pinecone";
import { initPinecone } from "@/utils/pinecone-client"; // Import your Pinecone client
import { PINECONE_INDEX_NAME, PINECONE_NAME_SPACE } from "@/config/pinecone";
import { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm } from "formidable";
import { PDFLoader } from "langchain/document_loaders";

export const config = {
  api: {
    bodyParser: false, // We handle parsing manually
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const form = new IncomingForm();
      const [_, files] = await form.parse(req);
      const userId = req.headers["x-user-id"] as string;
      const pdfLoader = new PDFLoader(files.pdfData[0].filepath);
      const pdfDocument = (await pdfLoader.load()).map((page) => {
        page.metadata["userId"] = userId;
        return page;
      });
      /* Split text into chunks */
      const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
        chunkOverlap: 200,
      });

      const docs = await textSplitter.splitDocuments(pdfDocument);

      /*create and store the embeddings in the vectorStore*/
      const embeddings = new OpenAIEmbeddings();
      const pinecone = await initPinecone();
      const index = pinecone.Index(PINECONE_INDEX_NAME); //change to your own index name
      console.log("deleting old data from the vector store...");
      index._delete({
        deleteRequest: {
          filter: {
            userId: userId,
          },
        },
      });

      console.log("creating vector store...");

      //embed the PDF documents
      await PineconeStore.fromDocuments(docs, embeddings, {
        pineconeIndex: index,
        namespace: PINECONE_NAME_SPACE,
        textKey: "text",
      });
      console.log("done creating vector store");
      res
        .status(200)
        .json({ success: true, message: "PDF uploaded and processed" });
    } catch (error) {
      console.error("Error handling PDF upload:", error);
      res.status(500).json({ error: "Error handling PDF upload" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
