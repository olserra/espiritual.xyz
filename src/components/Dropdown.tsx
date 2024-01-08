import React from "react";

interface DropdownProps {
  dropdownOptions: string[];
  selectedValue: string;
  onChange: (selectedValue: string) => void;
  selectPlaceholder: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  dropdownOptions,
  selectedValue,
  onChange,
  selectPlaceholder,
}) => (
  <select
    className="p-2 rounded-lg border lg:mb-12 border-gray-500"
    value={selectedValue}
    onChange={(e) => onChange(e.target.value)}
  >
    <option value="" disabled>
      {selectPlaceholder}
    </option>
    {dropdownOptions.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);
