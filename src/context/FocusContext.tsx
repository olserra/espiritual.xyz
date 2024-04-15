// FocusContext.tsx

import React, { createContext, useContext, useRef } from "react";

interface FocusContextType {
  focusInput: () => void;
}

const FocusContext = createContext<FocusContextType | undefined>(undefined);

export const useFocus = () => {
  const context = useContext(FocusContext);
  if (!context) {
    throw new Error("useFocus must be used within a FocusProvider");
  }
  return context;
};

export const FocusProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <FocusContext.Provider value={{ focusInput }}>
      {children}
      <input ref={inputRef} style={{ position: "absolute", left: "-9999px" }} />
    </FocusContext.Provider>
  );
};
