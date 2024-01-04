import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { Chroma } from "@langchain/community/vectorstores/chroma";
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

      // Split text into chunks
      const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
        chunkOverlap: 200,
      });
      const docs = await textSplitter.splitDocuments(pdfDocument);

      // Create and store the embeddings in the vectorStore
      const embeddings = new OpenAIEmbeddings();
      const chroma = new Chroma(embeddings, {
        collectionName: "your-collection-name", // Replace with your actual collection name
        // Add other necessary Chroma configurations
      });

      // Embed the PDF documents and add to Chroma
      console.log("Embedding and adding documents to Chroma...");
      for (const doc of docs) {
        await chroma.addDocuments([doc]);
      }

      console.log("Done creating vector store");
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
