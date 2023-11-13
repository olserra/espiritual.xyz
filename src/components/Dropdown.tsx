import React from "react";

interface DropdownProps {
  dropdownOptions: string[];
  selectedValue: string;
  onChange: (selectedValue: string) => void;
  selectPlaceholder: string;
}

export const Dropdown = ({
  dropdownOptions,
  selectedValue,
  onChange,
  selectPlaceholder,
}: DropdownProps) => (
  <select
    className="p-2 rounded-lg border lg:mb-12 border-gray-500"
    value={selectedValue}
    onChange={(event) => onChange(event.target.value)}
  >
    <option value="" disabled>
      {selectPlaceholder}
    </option>
    {dropdownOptions.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </select>
);
