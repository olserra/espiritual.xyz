import { useSession } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import { Context } from "@/context/context";
import { debounce } from "@/utils/debounce";
import CustomInstruction from "./Forms/CustomInstructions";
import Button from "./Button";

interface ICustomInstructions {
  jobKind: string;
  salaryExpectations: string;
  workingHours: string;
  benefits: string;
  location: string;
  relocation: string;
  remotePreferences: string;
  workEnvironment: string;
  careerGrowth: string;
  learningExpectations: string;
  teamCulture: string;
  technologies: string;
  techsToLearn: string;
}

export const Profiler: React.FC = () => {
  const { data: session } = useSession();
  const [
    customInstructions,
    setCustomInstructions,
  ] = useState<ICustomInstructions>({
    jobKind: "",
    salaryExpectations: "",
    workingHours: "",
    benefits: "",
    location: "",
    relocation: "",
    remotePreferences: "",
    workEnvironment: "",
    careerGrowth: "",
    learningExpectations: "",
    teamCulture: "",
    technologies: "",
    techsToLearn: "",
  });

  const [generatedJSON, setGeneratedJSON] = useState<string | null>(null);

  const [state, setState] = useContext(Context);

  useEffect(() => {
    return setCustomInstructions((prevState) => ({
      ...prevState,
      ...state.customInstructions,
    }));
  }, [state]);

  useEffect(() => {
    const debouncedGenerateJSON = debounce(() => {
      const data = {
        userProfile: {
          name: session?.user.name,
          email: session?.user.email,
        },
        customInstructions,
      };
      setGeneratedJSON(JSON.stringify(data, null, 2));
    }, 500); // 500ms delay

    debouncedGenerateJSON();
  }, [session, customInstructions]);

  const handleCopyToClipboard = () => {
    if (generatedJSON) {
      navigator.clipboard
        .writeText(generatedJSON)
        .then(() => alert("JSON copied to clipboard"))
        .catch(() => alert("Failed to copy JSON to clipboard"));
    } else {
      const userProfile = {
        name: session?.user.name,
        email: session?.user.email,
      };
      const data = {
        userProfile,
        customInstructions,
      };
      const jsonString = JSON.stringify(data, null, 2);
      navigator.clipboard
        .writeText(jsonString)
        .then(() => alert("JSON copied to clipboard"))
        .catch(() => alert("Failed to copy JSON to clipboard"));
    }
  };

  const handleInputChange = (
    field: keyof ICustomInstructions,
    text: string
  ) => {
    setState((prevState) => ({
      ...prevState,
      customInstructions: {
        ...prevState.customInstructions,
        [field]: text,
      },
    }));
  };

  const formatSubject = (subject: string): string => {
    return subject
      .split("_") // Split by underscore
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(" "); // Join words with spaces
  };

  return (
    <div className="flex flex-col justify-center container mx-auto p-4 text-gray-100">
      <h4>
        The more you say, the best you take. If is not applicable, leave it
        blank.
      </h4>
      <div className="mt-4 flex flex-col gap-10">
        {Object.entries(customInstructions).map(([key, value]) => (
          <CustomInstruction
            key={key}
            onInputChange={(text) =>
              handleInputChange(key as keyof ICustomInstructions, text)
            }
            subject={formatSubject(key)}
          />
        ))}

        <Button
          onClick={handleCopyToClipboard}
          className="px-4 py-2 bg-blue-500 text-white rounded-md mt-12 mb-24"
        >
          Copy data to Clipboard
        </Button>
      </div>
    </div>
  );
};
