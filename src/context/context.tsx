import React, { createContext, useState } from "react";

// Create the context with default value as empty state
const Context = createContext<
  [IState, React.Dispatch<React.SetStateAction<IState>>]
>([{} as IState, () => {}]);

// Context provider component
const ContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  // Initialize state with default values
  const [state, setState] = useState<IState>({
    user: {
      name: "",
      email: "",
      image: "",
    },
    customInstructions: "",
  });

  // Return the context provider with state and setState
  return (
    <Context.Provider value={[state, setState]}>
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
