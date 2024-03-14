import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import CustomInstruction from "./Forms/CustomInstructions";
import Button from "./Button";

interface UserProfile {
  name: string | undefined;
  email: string | undefined;
}

interface ProfilerData {
  userProfile: UserProfile;
  customInstructions: string | undefined;
}

export const Profiler: React.FC = () => {
  const { data: session } = useSession();
  const [customInstructions, setCustomInstructions] = useState<
    string | undefined
  >();
  const [generatedJSON, setGeneratedJSON] = useState<string | null>(null);

  useEffect(() => {
    const debouncedGenerateJSON = () => {
      const data: ProfilerData = {
        userProfile: {
          name: session?.user?.name,
          email: session?.user?.email,
        },
        customInstructions,
      };
      setGeneratedJSON(JSON.stringify(data, null, 2));
    };

    const debouncedHandler = setTimeout(debouncedGenerateJSON, 500); // 500ms delay

    return () => clearTimeout(debouncedHandler);
  }, [session, customInstructions]);

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

  return (
    <div className="flex flex-col justify-center container mx-auto p-4 text-gray-100">
      <h4>
        The more you say, the best you take. If is not applicable, leave it
        blank.
      </h4>
      <div className="mt-4 flex flex-col gap-10">
        <CustomInstruction
          onInputChange={(text) => setCustomInstructions(text)}
        />
        <Button
          onClick={handleCopyToClipboard}
          className="px-4 py-2 bg-blue-500 text-white rounded-md mt-12 mb-24 max-w-fit self-center"
        >
          Copy data to Clipboard
        </Button>
      </div>
    </div>
  );
};
