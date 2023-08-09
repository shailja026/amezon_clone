import React from "react";
import { createContext, useContext, useReducer } from "react";

export const Context = createContext();

export function ContextApi({ reducer, initialState, children }) {
  <Context.Provider value={useReducer(reducer, initialState)}>
    {children}
  </Context.Provider>
}

export const useStateValue = () => useContext(Context);
