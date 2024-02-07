import { useState, useEffect } from "react";

export const ContentGenerationForm: React.FC<ContentGenerationFormProps> = ({
  onPreferencesChange,
  className,
}) => {
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

  useEffect(() => {
    onPreferencesChange(contentGenerationPreferences);
  }, [contentGenerationPreferences, onPreferencesChange]);

  const handleCheckboxChange = (
    category: keyof ContentGenerationPreferences,
    value: string
  ) => {
    setContentGenerationPreferences((prevPreferences) => {
      const updatedPreferences = { ...prevPreferences };
      if (updatedPreferences[category].includes(value)) {
        updatedPreferences[category] = updatedPreferences[category].filter(
          (item) => item !== value
        );
      } else {
        updatedPreferences[category] = [...updatedPreferences[category], value];
      }
      return updatedPreferences;
    });
  };

  return (
    <div className={className}>
      <div className="flex flex-col justify-start items-start gap-2">
        <p className="text-gray-400 text-sm">Content Types:</p>
        <div className="flex gap-2">
          <label>
            <input
              type="checkbox"
              value="Article"
              checked={contentGenerationPreferences.contentTypes.includes(
                "Article"
              )}
              onChange={(e) =>
                handleCheckboxChange("contentTypes", e.target.value)
              }
            />
            Article
          </label>
          <label>
            <input
              type="checkbox"
              value="Blog Post"
              checked={contentGenerationPreferences.contentTypes.includes(
                "Blog Post"
              )}
              onChange={(e) =>
                handleCheckboxChange("contentTypes", e.target.value)
              }
            />
            Blog Post
          </label>

          <label>
            <input
              type="checkbox"
              value="Case Study"
              checked={contentGenerationPreferences.contentTypes.includes(
                "Case Study"
              )}
              onChange={(e) =>
                handleCheckboxChange("contentTypes", e.target.value)
              }
            />
            Case Study
          </label>
          <label>
            <input
              type="checkbox"
              value="Whitepaper"
              checked={contentGenerationPreferences.contentTypes.includes(
                "Whitepaper"
              )}
              onChange={(e) =>
                handleCheckboxChange("contentTypes", e.target.value)
              }
            />
            Whitepaper
          </label>
        </div>

        <p className="text-gray-400 text-sm">Writing Style:</p>
        <div className="flex gap-2">
          <label>
            <input
              type="checkbox"
              value="Formal"
              checked={contentGenerationPreferences.writingStyle.includes(
                "Formal"
              )}
              onChange={(e) =>
                handleCheckboxChange("writingStyle", e.target.value)
              }
            />
            Formal
          </label>
          <label>
            <input
              type="checkbox"
              value="Informal"
              checked={contentGenerationPreferences.writingStyle.includes(
                "Informal"
              )}
              onChange={(e) =>
                handleCheckboxChange("writingStyle", e.target.value)
              }
            />
            Informal
          </label>
          <label>
            <input
              type="checkbox"
              value="Technical"
              checked={contentGenerationPreferences.writingStyle.includes(
                "Technical"
              )}
              onChange={(e) =>
                handleCheckboxChange("writingStyle", e.target.value)
              }
            />
            Technical
          </label>
          <label>
            <input
              type="checkbox"
              value="Casual"
              checked={contentGenerationPreferences.writingStyle.includes(
                "Casual"
              )}
              onChange={(e) =>
                handleCheckboxChange("writingStyle", e.target.value)
              }
            />
            Casual
          </label>
          <label>
            <input
              type="checkbox"
              value="Conversational"
              checked={contentGenerationPreferences.writingStyle.includes(
                "Conversational"
              )}
              onChange={(e) =>
                handleCheckboxChange("writingStyle", e.target.value)
              }
            />
            Conversational
          </label>
        </div>

        <p className="text-gray-400 text-sm">Tone:</p>
        <div className="flex gap-2">
          <label>
            <input
              type="checkbox"
              value="Formal"
              checked={contentGenerationPreferences.tone.includes("Formal")}
              onChange={(e) => handleCheckboxChange("tone", e.target.value)}
            />
            Formal
          </label>
          <label>
            <input
              type="checkbox"
              value="Informative"
              checked={contentGenerationPreferences.tone.includes(
                "Informative"
              )}
              onChange={(e) => handleCheckboxChange("tone", e.target.value)}
            />
            Informative
          </label>
          <label>
            <input
              type="checkbox"
              value="Persuasive"
              checked={contentGenerationPreferences.tone.includes("Persuasive")}
              onChange={(e) => handleCheckboxChange("tone", e.target.value)}
            />
            Persuasive
          </label>
          <label>
            <input
              type="checkbox"
              value="Casual"
              checked={contentGenerationPreferences.tone.includes("Casual")}
              onChange={(e) => handleCheckboxChange("tone", e.target.value)}
            />
            Casual
          </label>
        </div>

        <p className="text-gray-400 text-sm">Audience:</p>
        <div className="flex gap-2">
          <label>
            <input
              type="checkbox"
              value="General"
              checked={contentGenerationPreferences.audience.includes(
                "General"
              )}
              onChange={(e) => handleCheckboxChange("audience", e.target.value)}
            />
            General
          </label>
          <label>
            <input
              type="checkbox"
              value="Technical"
              checked={contentGenerationPreferences.audience.includes(
                "Technical"
              )}
              onChange={(e) => handleCheckboxChange("audience", e.target.value)}
            />
            Technical
          </label>
          <label>
            <input
              type="checkbox"
              value="Business"
              checked={contentGenerationPreferences.audience.includes(
                "Business"
              )}
              onChange={(e) => handleCheckboxChange("audience", e.target.value)}
            />
            Business
          </label>
        </div>

        <p className="text-gray-400 text-sm">Multimedia Format:</p>
        <div className="flex gap-2">
          <label>
            <input
              type="checkbox"
              value="Text"
              checked={contentGenerationPreferences.multimediaFormat.includes(
                "Text"
              )}
              onChange={(e) =>
                handleCheckboxChange("multimediaFormat", e.target.value)
              }
            />
            Text
          </label>
          <label>
            <input
              type="checkbox"
              value="Image"
              checked={contentGenerationPreferences.multimediaFormat.includes(
                "Image"
              )}
              onChange={(e) =>
                handleCheckboxChange("multimediaFormat", e.target.value)
              }
            />
            Image
          </label>
          <label>
            <input
              type="checkbox"
              value="Audio"
              checked={contentGenerationPreferences.multimediaFormat.includes(
                "Audio"
              )}
              onChange={(e) =>
                handleCheckboxChange("multimediaFormat", e.target.value)
              }
            />
            Audio
          </label>
          <label>
            <input
              type="checkbox"
              value="Video"
              checked={contentGenerationPreferences.multimediaFormat.includes(
                "Video"
              )}
              onChange={(e) =>
                handleCheckboxChange("multimediaFormat", e.target.value)
              }
            />
            Video
          </label>
        </div>
      </div>
    </div>
  );
};
