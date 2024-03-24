import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

interface Conversation {
  message: string;
}

export const Profiler: React.FC = () => {
  const { data: session } = useSession();
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConversation = async () => {
      if (session?.user?.id) {
        try {
          const response = await fetch(
            "https://boostio-ai-backend.onrender.com/download/conversation",
            {
              headers: {
                "Content-Type": "application/json",
                "x-user-id": session.user.id, // Ensure the ID is a string
              },
            }
          );

          if (!response.ok) {
            throw new Error("Failed to fetch conversation data");
          }

          const data: Conversation = await response.json();
          setConversation(data);
        } catch (err: any) {
          setError(err.message || "An error occurred");
        }
      }
    };

    fetchConversation();
  }, [session?.user?.id]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!conversation) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 shadow-md rounded-lg">
      {/* Render your conversation data here */}
      <p>{conversation.message}</p>
    </div>
  );
};
