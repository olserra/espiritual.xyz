import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useMutation } from "@apollo/client";
import CustomInstruction from "./Forms/CustomInstructions";
import Button from "./Button";
import { SAVE_CUSTOM_INSTRUCTIONS } from "@/data/gql";

export const Profiler: React.FC = () => {
  const { data: session } = useSession();
  const [customInstructions, setCustomInstructions] = useState<string>("");
  const [generatedJSON, setGeneratedJSON] = useState<string | null>(null);

  useEffect(() => {
    const debouncedGenerateJSON = () => {
      const data = {
        name: session?.user?.name as string,
        email: session?.user?.email as string,
        image: session?.user?.image as string,
      };
      setGeneratedJSON(JSON.stringify(data, null, 2));
    };

    const debouncedHandler = setTimeout(debouncedGenerateJSON, 500);

    return () => clearTimeout(debouncedHandler);
  }, [session]);

  const handleInputChange = (text: string) => {
    setCustomInstructions(text);
  };

  const handleCopyToClipboard = () => {
    if (generatedJSON) {
      navigator.clipboard
        .writeText(generatedJSON)
        .then(() => alert("JSON copied to clipboard"))
        .catch(() => alert("Failed to copy JSON to clipboard"));
    } else {
      alert("No data to copy.");
    }
  };

  const [saveCustomInstructions] = useMutation(SAVE_CUSTOM_INSTRUCTIONS, {
    onError: (error) => {
      console.error("Failed to save custom instructions:", error);
      alert("Failed to save custom instructions. Please try again later.");
    },
    onCompleted: () => {
      alert("Custom instructions saved successfully!");
    },
  });

  const handleSaveInstructions = () => {
    if (session?.user?.id && customInstructions.trim() !== "") {
      saveCustomInstructions({
        variables: {
          userId: session.user.id,
          instructions: customInstructions,
        },
      });
    }
  };

  return (
    <div className="flex flex-col justify-center container mx-auto p-4 text-gray-100">
      <h4>
        The more you say, the best you take. If it's not applicable, leave it
        blank.
      </h4>
      <div className="mt-4 flex flex-col gap-10">
        <CustomInstruction onInputChange={handleInputChange} />
        <div className="flex gap-4">
          <Button
            onClick={handleSaveInstructions}
            className="px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Save Instructions
          </Button>
          <Button
            onClick={handleCopyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Copy Data to Clipboard
          </Button>
        </div>
      </div>
    </div>
  );
};
