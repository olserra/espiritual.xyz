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
        <p className="text-gray-100 font-semibold text-sm">Content Types:</p>
        <div className="flex gap-2 mb-6">
          <label>
            <input
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
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
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
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
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
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
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
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

        <p className="text-gray-100 font-semibold text-sm">Writing Style:</p>
        <div className="flex gap-2 mb-6">
          <label>
            <input
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
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
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
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
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
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
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
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
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
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

        <p className="text-gray-100 font-semibold text-sm">Tone:</p>
        <div className="flex gap-2 mb-6">
          <label>
            <input
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
              type="checkbox"
              value="Formal"
              checked={contentGenerationPreferences.tone.includes("Formal")}
              onChange={(e) => handleCheckboxChange("tone", e.target.value)}
            />
            Formal
          </label>
          <label>
            <input
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
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
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
              type="checkbox"
              value="Persuasive"
              checked={contentGenerationPreferences.tone.includes("Persuasive")}
              onChange={(e) => handleCheckboxChange("tone", e.target.value)}
            />
            Persuasive
          </label>
          <label>
            <input
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
              type="checkbox"
              value="Casual"
              checked={contentGenerationPreferences.tone.includes("Casual")}
              onChange={(e) => handleCheckboxChange("tone", e.target.value)}
            />
            Casual
          </label>
        </div>

        <p className="text-gray-100 font-semibold text-sm">Audience:</p>
        <div className="flex gap-2 mb-6">
          <label>
            <input
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
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
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
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
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
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

        <p className="text-gray-100 font-semibold text-sm">
          Multimedia Format:
        </p>
        <div className="flex gap-2 mb-6">
          <label>
            <input
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
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
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
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
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
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
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
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
