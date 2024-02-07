import React from "react";

interface CheckboxProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  value,
  checked,
  onChange,
}) => {
  const handleChange = () => {
    onChange(value);
  };

  return (
    <label className="checkbox relative cursor-pointer text-white text-2xl">
      <input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={handleChange}
        className="hidden"
      />
      {label}
      <span className="checkbox-marker absolute top-0 left-0 w-9 h-9 border-3 border-white rounded-md"></span>
      {checked && (
        <span
          className="checkbox-neon absolute top-0 left-0 w-9 h-9 border-3 border-white rounded-md"
          style={{
            boxShadow:
              "1px 1px 10px #ff178f, -1px -1px 10px #ff178f, inset 1px 1px 10px #ff178f, inset -1px -1px 10px #ff178f",
            marginRight: "4px",
            height: "20px",
            width: "20px",
          }}
        ></span>
      )}
    </label>
  );
};

export default Checkbox;
