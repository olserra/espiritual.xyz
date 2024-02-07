import { useSession } from "next-auth/react";
import Image from "next/image";
import { CodingForm } from "./Forms/CodingForm";
import { ContentGenerationForm } from "./Forms/ContentGenerationForm";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

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

  useEffect(() => {
    // Function to generate JSON object based on user profile and coding preferences
    const generateJSON = () => {
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
      setGeneratedJSON(JSON.stringify(data, null, 2));
    };

    generateJSON();
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
    }
  };

  return (
    <div className="px-4 md:px-12 mx-auto max-w-screen-xl text-center lg:px-6">
      <div className="mx-auto mt-12 flex justify-start items-start gap-8">
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

        {/* Right side: Generated JSON */}
        {generatedJSON && (
          <div className="flex flex-col items-start gap-4 w-1/2">
            <p className="text-base text-gray-200">Generated JSON:</p>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md"
              rows={12}
              value={generatedJSON}
              readOnly
            />
            <button
              onClick={handleCopyToClipboard}
              className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4"
            >
              Copy JSON to Clipboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
