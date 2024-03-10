// src/dbSync.ts

import { PrismaClient } from "@prisma/client";
import { Context } from "@/context/context";
import { useContext } from "react";
import { GetSessionParams, getSession } from "next-auth/react";
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
      customInstructions: {},
    };
    return state;
  } catch (error) {
    console.error("Error fetching data from database:", error);
    throw error;
  }
}

// Function to update user data in the database
async function updateUserDataInDB(
  data: Partial<IState["user"]>,
  userId: string
): Promise<void> {
  try {
    // Update user data in the database using Prisma queries
    await prisma.user.update({
      where: { id: userId },
      data,
    });
    console.log("User data updated in the database:", data);
  } catch (error) {
    console.error("Error updating user data in the database:", error);
    throw error;
  }
}

// Function to update custom instructions in the database
async function updateCustomInstructionsInDB(
  data: Partial<IState["customInstructions"]>
): Promise<void> {
  try {
    // Update custom instructions in the database using Prisma queries
    // Example: await prisma.customInstructions.update({ where: { id: 'customInstructionsId' /* Provide the custom instructions ID */ }, data });
    console.log("Custom instructions updated in the database:", data);
  } catch (error) {
    console.error("Error updating custom instructions in the database:", error);
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

export const getServerSideProps = async (
  context: GetSessionParams | undefined
) => {
  const session = await getSession(context); // Get session
  const userId = session?.user?.id; // Extract user ID from session

  return {
    props: {
      userId, // Pass userId as prop to the component
    },
  };
};

// Export additional functions as needed

// Call syncData periodically
// You can adjust the interval as needed
const SYNC_INTERVAL = 3600000; // Interval in milliseconds (e.g., 1 hour)
setInterval(syncData, SYNC_INTERVAL);
