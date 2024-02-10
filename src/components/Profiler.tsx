import { useSession } from "next-auth/react";
import Image from "next/image";
import { CodingForm } from "./Forms/CodingForm";
import { ContentGenerationForm } from "./Forms/ContentGenerationForm";
import { useContext, useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Context } from "@/context/context";
import { debounce } from "@/utils/debounce";

export const Profiler = () => {
  const { data: session } = useSession();
  const avatarImg = session?.user.image || "";
  const [codingPreferences, setCodingPreferences] = useState<CodingPreferences>(
    {
      language: [],
      codingStyle: [],
      dataFormat: [],
      errorHandling: [],
      variableNaming: [],
    }
  );
  const [
    contentGenerationPreferences,
    setContentGenerationPreferences,
  ] = useState<ContentGenerationPreferences>({
    contentTypes: [],
    writingStyle: [],
    tone: [],
    audience: [],
    multimediaFormat: [],
  });
  const [generatedJSON, setGeneratedJSON] = useState<string | null>(null);
  const [isCodingFormVisible, setIsCodingFormVisible] = useState<boolean>(
    false
  );
  const [
    isContentGenerationFormVisible,
    setIsContentGenerationFormVisible,
  ] = useState<boolean>(false);
  const [state, setState] = useContext(Context); // Get state from context

  useEffect(() => {
    if (session) {
      // Update user information in context state when session changes
      setState((prevState) => ({
        ...prevState,
        user: {
          name: session.user.name ?? "",
          email: session.user.email ?? "",
          image: session.user.image || "",
        },
      }));
    }
  }, [session, setState]);

  useEffect(() => {
    // Define a debounced version of your JSON generation function
    const debouncedGenerateJSON = debounce(() => {
      const data = {
        userProfile: {
          name: session?.user.name,
          email: session?.user.email,
          avatarImg: avatarImg,
        },
        codingPreferences,
        contentGenerationPreferences,
      };
      setGeneratedJSON(JSON.stringify(data, null, 2));
    }, 500); // 500ms delay

    debouncedGenerateJSON();
  }, [session, avatarImg, codingPreferences, contentGenerationPreferences]);

  const handleCodingPreferencesChange = (preferences: CodingPreferences) => {
    setCodingPreferences(preferences);
  };

  const handleContentGenerationPreferencesChange = (
    preferences: ContentGenerationPreferences
  ) => {
    setContentGenerationPreferences(preferences);
  };

  const toggleCodingFormVisibility = () => {
    setIsCodingFormVisible((prevVisibility) => !prevVisibility);
  };

  const toggleContentGenerationFormVisibility = () => {
    setIsContentGenerationFormVisible((prevVisibility) => !prevVisibility);
  };

  const handleCopyToClipboard = () => {
    if (generatedJSON) {
      navigator.clipboard
        .writeText(generatedJSON)
        .then(() => alert("JSON copied to clipboard"))
        .catch(() => alert("Failed to copy JSON to clipboard"));
    } else {
      // If generatedJSON is null or empty, generate it first and then copy
      const userProfile = {
        name: session?.user.name,
        email: session?.user.email,
        avatarImg: avatarImg,
      };
      const data = {
        userProfile,
        codingPreferences,
        contentGenerationPreferences,
      };
      const jsonString = JSON.stringify(data, null, 2);
      navigator.clipboard
        .writeText(jsonString)
        .then(() => alert("JSON copied to clipboard"))
        .catch(() => alert("Failed to copy JSON to clipboard"));
    }
  };

  return (
    <div className="px-4 md:px-12 mx-auto max-w-screen-xl text-center lg:px-6">
      <div className="mx-auto mt-12 flex justify-center items-start gap-8">
        {/* Left side: Coding Form */}
        <div className="w-1/2">
          <div className="flex flex-col justify-start items-center gap-4 text-gray-800 dark:text-gray-200">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 mb-2 rounded-full bg-gray-300">
                <Image
                  src={avatarImg}
                  alt="user icon"
                  height={100}
                  width={100}
                  className="rounded-full"
                />
              </div>
              <p className="text-lg font-semibold">{session?.user.name}</p>
              <p className="text-sm">{session?.user.email}</p>
            </div>
            {/* Coding Preferences section */}
            <div
              className="mt-4 flex items-center cursor-pointer text-gray-200"
              onClick={toggleCodingFormVisibility}
            >
              <p className="text-lg font-semibold">Coding Preferences</p>
              <ChevronDown
                className={`h-6 w-6 ml-2transition-transform duration-200 ${
                  isCodingFormVisible ? "transform rotate-180" : ""
                }`}
              />
            </div>
            {/* Show CodingForm if isCodingFormVisible is true */}
            {isCodingFormVisible && (
              <CodingForm
                onPreferencesChange={handleCodingPreferencesChange}
                className="text-gray-200"
              />
            )}
            {/* Content Generation Preferences section */}
            <div
              className="mt-4 flex items-center cursor-pointer text-gray-200"
              onClick={toggleContentGenerationFormVisibility}
            >
              <p className="text-lg font-semibold">
                Content Generation Preferences
              </p>
              <ChevronDown
                className={`h-6 w-6 ml-2transition-transform duration-200 ${
                  isContentGenerationFormVisible ? "transform rotate-180" : ""
                }`}
              />
            </div>
            {/* Show ContentGenerationForm if isContentGenerationFormVisible is true */}
            {isContentGenerationFormVisible && (
              <ContentGenerationForm
                onPreferencesChange={handleContentGenerationPreferencesChange}
                className="text-gray-200"
              />
            )}
          </div>
        </div>
      </div>
      <button
        onClick={handleCopyToClipboard}
        className="px-4 py-2 bg-blue-500 text-white rounded-md mt-12 mb-24"
      >
        Copy data to Clipboard
      </button>
    </div>
  );
};
