// src/dbSync.ts

import { PrismaClient } from "@prisma/client";
import { Context } from "@/context/context";
import { useContext } from "react";

const prisma = new PrismaClient();

// Function to fetch data from the database
async function fetchDataFromDB(): Promise<IState> {
  try {
    // Fetch data from the database using Prisma queries
    const user = await prisma.user.findFirst({
      include: { accounts: true, sessions: true },
    });
    // Transform data fetched from the database as per your context structure
    const state: IState = {
      user: {
        name: user?.name || "",
        email: user?.email || "",
        image: user?.image || "",
      },
      codingPreferences: {
        language: [],
        codingStyle: [],
        dataFormat: [],
        errorHandling: [],
        variableNaming: [],
      },
      contentGenerationPreferences: {
        contentTypes: [],
        writingStyle: [],
        tone: [],
        audience: [],
        multimediaFormat: [],
      },
    };
    return state;
  } catch (error) {
    console.error("Error fetching data from database:", error);
    throw error;
  }
}

// Function to update user data in the database
async function updateUserDataInDB(
  data: Partial<IState["user"]>
): Promise<void> {
  try {
    // Update user data in the database using Prisma queries
    await prisma.user.update({
      where: { id: "userId" /* Provide the user ID */ },
      data,
    });
    console.log("User data updated in the database:", data);
  } catch (error) {
    console.error("Error updating user data in the database:", error);
    throw error;
  }
}

// Function to update coding preferences in the database
async function updateCodingPreferencesInDB(
  data: Partial<IState["codingPreferences"]>
): Promise<void> {
  try {
    // Update coding preferences in the database using Prisma queries
    // Example: await prisma.codingPreferences.update({ where: { id: 'codingPreferencesId' /* Provide the coding preferences ID */ }, data });
    console.log("Coding preferences updated in the database:", data);
  } catch (error) {
    console.error("Error updating coding preferences in the database:", error);
    throw error;
  }
}

// Function to update content generation preferences in the database
async function updateContentGenerationPreferencesInDB(
  data: Partial<IState["contentGenerationPreferences"]>
): Promise<void> {
  try {
    // Update content generation preferences in the database using Prisma queries
    // Example: await prisma.contentGenerationPreferences.update({ where: { id: 'contentGenerationPreferencesId' /* Provide the content generation preferences ID */ }, data });
    console.log(
      "Content generation preferences updated in the database:",
      data
    );
  } catch (error) {
    console.error(
      "Error updating content generation preferences in the database:",
      error
    );
    throw error;
  }
}

// Function to periodically sync data between DB and context
export function syncData() {
  const [state, setState] = useContext(Context);
  fetchDataFromDB()
    .then((data) => setState(data))
    .catch((error) => console.error("Error syncing data:", error));
}

// Export additional functions as needed

// Call syncData periodically
// You can adjust the interval as needed
const SYNC_INTERVAL = 3600000; // Interval in milliseconds (e.g., 1 hour)
setInterval(syncData, SYNC_INTERVAL);
