import React, { useState } from "react";

interface IState {
  youTubeData: [];
}

const Context = React.createContext([{}, () => {}]);

const ContextProvider = (props: any) => {
  const [state, setState] = useState<IState>({
    youTubeData: [],
  });

  return (
    <Context.Provider value={[state, setState]}>
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
