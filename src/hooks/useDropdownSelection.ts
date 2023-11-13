import { useState } from "react";

type DropdownValue = string | "" | "Select";

const useDropdownSelection = (initialValue: DropdownValue) => {
  const [selectedValue, setSelectedValue] = useState<DropdownValue>(
    initialValue
  );

  const handleDropdownSelection = (value: DropdownValue) => {
    setSelectedValue(value);
  };

  return {
    selectedValue,
    handleDropdownSelection,
  };
};

export default useDropdownSelection;
