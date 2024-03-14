// pages/api/customInstructions.ts

import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { userId, customInstructions } = req.body;

    try {
      await saveCustomInstructions(userId, customInstructions);

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Failed to save custom instructions:", error);
      res.status(500).json({ error: "Failed to save custom instructions" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

const saveCustomInstructions = async (
  userId: string,
  customInstructions: string
): Promise<void> => {
  try {
    await prisma.customInstructions.upsert({
      where: { userId },
      create: { userId, instructions: customInstructions },
      update: { instructions: customInstructions },
    });
  } catch (error: any) {
    throw new Error("Failed to save custom instructions: " + error.message);
  }
};
