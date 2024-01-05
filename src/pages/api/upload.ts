import { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";
import { PrismaClient } from "@prisma/client";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { Chroma } from "langchain/vectorstores/chroma";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { COLLECTION_NAME } from "@/config/chroma";

const formidable = require("formidable");

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Error processing the upload:", err);
      return res.status(500).json({ error: "Failed to process the upload" });
    }

    try {
      const prisma = new PrismaClient();

      const knowledgeBaseName = Array.isArray(fields.knowledgeBaseName)
        ? fields.knowledgeBaseName[0]
        : fields.knowledgeBaseName;
      const description = Array.isArray(fields.description)
        ? fields.description[0]
        : fields.description;
      const isPublic = Array.isArray(fields.isPublic)
        ? fields.isPublic[0] === "true"
        : fields.isPublic === "true";
      const userId = req.headers["x-user-id"]; // or extract from session

      if (!files.pdfFile) {
        return res.status(400).json({ error: "No PDF file uploaded" });
      }

      const pdfFilePath = files.pdfFile.filepath; // Ensure this is the correct field name

      if (!pdfFilePath) {
        return res.status(400).json({ error: "PDF file path is undefined" });
      }

      const pdfBuffer = await fs.readFile(pdfFilePath);

      const loader = new PDFLoader(pdfBuffer);
      const docs = await loader.load();

      const embeddings = new OpenAIEmbeddings();
      let chroma = new Chroma(embeddings, { collectionName: COLLECTION_NAME });
      await chroma.index?.reset();

      for (let i = 0; i < docs.length; i += 100) {
        const batch = docs.slice(i, i + 100);
        await chroma.addDocuments(batch);
      }

      const knowledgeBase = await prisma.knowledgeBase.create({
        data: {
          name: knowledgeBaseName,
          description: description,
          isPublic: isPublic,
          format: "pdf",
          user: {
            connect: {
              id: userId,
            },
          },
        },
      });

      await prisma.document.create({
        data: {
          name: files.pdfFile.originalFilename,
          path: files.pdfFile.filepath,
          chromaRef: "your_chroma_reference", // Replace with actual Chroma reference
          knowledgeBaseId: knowledgeBase.id,
        },
      });

      res
        .status(200)
        .json({ success: true, message: "PDF uploaded and processed" });
    } catch (error) {
      console.error("Error in processing:", error);
      res.status(500).json({ error: "Failed to process the upload" });
    } finally {
      await prisma.$disconnect();
    }
  });
}
