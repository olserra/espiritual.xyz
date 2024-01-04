import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { Chroma } from "@langchain/community/vectorstores/chroma";
import { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm, File, Files } from "formidable";
import { PDFLoader } from "langchain/document_loaders";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const data = await new Promise<{ fields: any; files: Files }>(
        (resolve, reject) => {
          const form = new IncomingForm();
          form.parse(req, (err, fields, files) => {
            if (err) reject(err);
            resolve({ fields, files });
          });
        }
      );

      const pdfFileArray = data.files.pdfData;
      const userId = req.headers["x-user-id"] as string;

      // Check if pdfData is an array and has at least one file
      if (!Array.isArray(pdfFileArray) || pdfFileArray.length === 0) {
        return res.status(400).json({ error: "No PDF file uploaded" });
      }

      // Now it's safe to access the first file
      const pdfFile = pdfFileArray[0];

      if (!pdfFile) {
        return res.status(400).json({ error: "No PDF file uploaded" });
      }

      const pdfLoader = new PDFLoader(pdfFile.filepath);
      const pdfDocument = (await pdfLoader.load()).map((page) => {
        page.metadata["userId"] = userId;
        return page;
      });

      const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
        chunkOverlap: 200,
      });
      const docs = await textSplitter.splitDocuments(pdfDocument);

      const embeddings = new OpenAIEmbeddings();
      const chroma = new Chroma(embeddings, {
        collectionName: "your-collection-name", // Replace with your actual collection name
        // Other necessary Chroma configurations
      });

      console.log("Embedding and adding documents to Chroma...");
      for (const doc of docs) {
        await chroma.addDocuments([doc]);
      }

      console.log("Done creating vector store");
      res
        .status(200)
        .json({ success: true, message: "PDF uploaded and processed" });

      // Clean up the uploaded file
      fs.unlink(pdfFile.filepath, (err) => {
        if (err) console.error("Error cleaning up file:", err);
      });
    } catch (error) {
      console.error("Error handling PDF upload:", error);
      res.status(500).json({ error: "Error handling PDF upload" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
