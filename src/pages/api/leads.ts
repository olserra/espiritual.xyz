import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { name, email, companyUrl, employees } = req.body;

      const formSubmission = await prisma.formSubmission.create({
        data: {
          email,
        },
      });

      res
        .status(200)
        .json({ message: "Lead data stored successfully", formSubmission });
    } catch (error) {
      console.error("Error storing lead data:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
