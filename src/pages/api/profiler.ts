// pages/api/profiler.ts

import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { instagramHandle } = req.body;

    try {
      const instagramData = await fetchInstagramData(instagramHandle);

      res.status(200).json({ instagramData });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to fetch user data from Instagram" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

async function fetchInstagramData(instagramHandle: string) {
  try {
    // Make a request to Instagram API using the handle
    // For demonstration purposes, let's assume we're fetching user data from Instagram's API
    // Replace this with your actual Instagram API request logic
    const response = await axios.get(
      `https://www.instagram.com/${instagramHandle}/?__a=1`
    );

    // Parse the response and extract relevant information
    // For demonstration, let's just return the raw data for now
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch user data from Instagram");
  }
}
