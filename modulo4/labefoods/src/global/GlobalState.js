import React from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalState = (props) => {
  const states = "Teste Global States";
  const setters = "Teste Global Setters";

  return (
    <GlobalContext.Provider value={{ states, setters }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
