import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Button from "./Button";
import Image from "next/image";
import { Context } from "@/context/context"; // Import your context here

export const Analysis: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { data: session } = useSession();
  const [state, setState] = useContext(Context);

  useEffect(() => {
    const getInsights = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.post<string>(`http://127.0.0.1:8000/wa`, {
          headers: {
            "x-user-id": session?.user?.id,
          },
        });
        setState((prevState) => ({
          ...prevState,
          insights: response.data, // Update insights in context state
        }));
      } catch (error) {
        console.error("Error fetching insights:", error);
        setError("Error: Failed to fetch insights.");
      } finally {
        setLoading(false);
      }
    };

    // Fetch insights only if not already present in context
    if (!state.insights) {
      getInsights();
    }
  }, [session]); // No need to include state or setState in dependency array

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      {loading ? (
        <div className="flex justify-center items-center h-full py-40">
          <Image
            src={
              "https://cdn.pixabay.com/animation/2022/10/11/03/16/03-16-39-160_512.gif"
            }
            alt={""}
            width={100}
            height={80}
          />
        </div>
      ) : state.insights ? (
        <div className="my-8 px-8 flex flex-col gap-8">
          <p className="text-gray-200">{state.insights}</p>
          <Button className="" onClick={() => router.push("/")}>
            Back to Upload
          </Button>
        </div>
      ) : (
        <p>{error || "No insights available."}</p>
      )}
    </div>
  );
};
