import React, { useEffect, useState } from "react";

interface CustomInstructionProps {
  onInputChange: (text: string) => void;
  initialValue: string;
}

const CustomInstruction: React.FC<CustomInstructionProps> = ({
  onInputChange,
  initialValue,
}) => {
  const [inputText, setInputText] = useState<string>(initialValue);

  useEffect(() => {
    setInputText(initialValue);
  }, [initialValue]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    setInputText(text);
    onInputChange(text);
  };

  // Validate character count
  const maxLength = 1500;
  const remainingChars = maxLength - inputText.length;
  const charCountClassName =
    remainingChars >= 0 ? "text-gray-500" : "text-red-500";

  return (
    <div>
      <textarea
        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Type here..."
        value={inputText}
        onChange={handleChange}
        maxLength={maxLength}
        rows={10}
      />
      <p className={`${charCountClassName} text-sm mt-1`}>
        {remainingChars} characters remaining
      </p>
    </div>
  );
};

export default CustomInstruction;
