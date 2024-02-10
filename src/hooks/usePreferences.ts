// hooks/usePreferences.js
import { useState, useCallback } from "react";

export const usePreferences = (initialPreferences: any) => {
  const [preferences, setPreferences] = useState(initialPreferences);

  const updatePreferences = useCallback((updates: any) => {
    setPreferences((prevPreferences: any) => ({
      ...prevPreferences,
      ...updates,
    }));
  }, []);

  return [preferences, updatePreferences];
};
