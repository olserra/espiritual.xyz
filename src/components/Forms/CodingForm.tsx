// CodingForm.tsx
import { useState, useEffect } from "react";

export const CodingForm: React.FC<CodingFormProps> = ({
  onPreferencesChange,
  className,
}) => {
  const [codingPreferences, setCodingPreferences] = useState<CodingPreferences>(
    {
      language: [],
      codingStyle: [],
      dataFormat: [],
      errorHandling: [],
      variableNaming: [],
    }
  );

  useEffect(() => {
    onPreferencesChange(codingPreferences);
  }, [codingPreferences, onPreferencesChange]);

  const handleCheckboxChange = (
    category: keyof CodingPreferences,
    value: string
  ) => {
    setCodingPreferences((prevPreferences) => {
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
        <p className="text-gray-400 text-sm">Data Format:</p>
        <div className="flex gap-2">
          <label>
            <input
              type="checkbox"
              value="JSON"
              checked={codingPreferences.dataFormat.includes("JSON")}
              onChange={(e) =>
                handleCheckboxChange("dataFormat", e.target.value)
              }
            />
            JSON
          </label>
          <label>
            <input
              type="checkbox"
              value="XML"
              checked={codingPreferences.dataFormat.includes("XML")}
              onChange={(e) =>
                handleCheckboxChange("dataFormat", e.target.value)
              }
            />
            XML
          </label>
          {/* Add more data format options */}
        </div>

        <p className="text-gray-400 text-sm">Error Handling:</p>
        <div className="flex gap-2">
          <label>
            <input
              type="checkbox"
              value="Try-Catch"
              checked={codingPreferences.errorHandling.includes("Try-Catch")}
              onChange={(e) =>
                handleCheckboxChange("errorHandling", e.target.value)
              }
            />
            Try-Catch
          </label>
          <label>
            <input
              type="checkbox"
              value="If-Else"
              checked={codingPreferences.errorHandling.includes("If-Else")}
              onChange={(e) =>
                handleCheckboxChange("errorHandling", e.target.value)
              }
            />
            If-Else
          </label>
          {/* Add more error handling options */}
        </div>

        <p className="text-gray-400 text-sm">Variable Naming:</p>
        <div className="flex gap-2">
          <label>
            <input
              type="checkbox"
              value="CamelCase"
              checked={codingPreferences.variableNaming.includes("CamelCase")}
              onChange={(e) =>
                handleCheckboxChange("variableNaming", e.target.value)
              }
            />
            Camel Case
          </label>
          <label>
            <input
              type="checkbox"
              value="SnakeCase"
              checked={codingPreferences.variableNaming.includes("SnakeCase")}
              onChange={(e) =>
                handleCheckboxChange("variableNaming", e.target.value)
              }
            />
            Snake Case
          </label>
          {/* Add more variable naming options */}
        </div>

        <p className="text-gray-400 text-sm">Coding Style:</p>
        <div className="flex gap-2">
          <label>
            <input
              type="checkbox"
              value="Functional"
              checked={codingPreferences.codingStyle.includes("Functional")}
              onChange={(e) =>
                handleCheckboxChange("codingStyle", e.target.value)
              }
            />
            Functional
          </label>
          <label>
            <input
              type="checkbox"
              value="Object-Oriented"
              checked={codingPreferences.codingStyle.includes(
                "Object-Oriented"
              )}
              onChange={(e) =>
                handleCheckboxChange("codingStyle", e.target.value)
              }
            />
            Object-Oriented
          </label>
          {/* Add more coding style options */}
        </div>

        <p className="text-gray-400 text-sm">Language:</p>
        <div className="flex gap-2">
          <label>
            <input
              type="checkbox"
              value="JavaScript"
              checked={codingPreferences.language.includes("JavaScript")}
              onChange={(e) => handleCheckboxChange("language", e.target.value)}
            />
            JavaScript
          </label>
          <label>
            <input
              type="checkbox"
              value="Python"
              checked={codingPreferences.language.includes("Python")}
              onChange={(e) => handleCheckboxChange("language", e.target.value)}
            />
            Python
          </label>
          <label>
            <input
              type="checkbox"
              value="TypeScript"
              checked={codingPreferences.language.includes("TypeScript")}
              onChange={(e) => handleCheckboxChange("language", e.target.value)}
            />
            TypeScript
          </label>
          <label>
            <input
              type="checkbox"
              value="Java"
              checked={codingPreferences.language.includes("Java")}
              onChange={(e) => handleCheckboxChange("language", e.target.value)}
            />
            Java
          </label>
        </div>

        <p className="text-gray-400 text-sm">Add comments:</p>
        <div className="flex gap-2">
          <label>
            <input type="radio" name="comments" value="Yes" />
            Yes
          </label>
          <label>
            <input type="radio" name="comments" value="No" />
            No
          </label>
        </div>
      </div>
    </div>
  );
};
