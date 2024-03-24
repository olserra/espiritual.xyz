import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Button from "./Button";

interface Conversation {
  // Adjusted to match your file structure
  title: string;
  create_time: number;
  update_time: number;
  mapping: any; // You can further type this according to your actual data structure
}

export const Profiler: React.FC = () => {
  const { data: session } = useSession();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loadingInsights, setLoadingInsights] = useState<boolean>(false);

  useEffect(() => {
    const fetchConversations = async () => {
      if (session?.user?.id) {
        try {
          const response = await fetch(
            "https://boostio-ai-backend.onrender.com/profiler",
            {
              headers: {
                "Content-Type": "application/json",
                "x-user-id": session.user.id,
              },
            }
          );

          if (!response.ok) {
            throw new Error("Failed to fetch conversation data");
          }

          const data: Conversation[] = await response.json();
          setConversations(data);
        } catch (err: any) {
          setError(err.message || "An error occurred");
        }
      }
    };

    fetchConversations();
  }, [session?.user?.id]);

  const fetchInsights = async () => {
    if (conversations.length > 0) {
      setLoadingInsights(true);
      // Extract the last 99 objects
      try {
        const response = await fetch(
          "https://boostio-ai-backend.onrender.com/insights",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-user-id": session?.user?.id,
            } as HeadersInit,
            body: JSON.stringify(conversations),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch insights");
        }

        const insights = await response.json();
        console.log("Insights:", insights);
        // Handle insights data as needed
      } catch (err: any) {
        setError(err.message || "An error occurred");
      } finally {
        setLoadingInsights(false);
      }
    }
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!conversations.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 shadow-md rounded-lg text-gray-200">
      <p>File: conversations.json</p>
      <Button
        onClick={fetchInsights}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        disabled={loadingInsights}
      >
        {loadingInsights ? "Loading Insights..." : "Get Insights"}
      </Button>
    </div>
  );
};
