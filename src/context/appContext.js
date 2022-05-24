import React, { useContext, useReducer, useState } from "react";
import reducer from "./reducer";
import { ADD_ITEM, NO_VALUE, REMOVE_ITEM, CLOSE_MODAL } from "./actions";

const initialState = {
  firstName: "",
  position: "",
  content: "",
  people: [],
  showModal: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [stateContext, setStateContext] = useState(initialState);

  return (
    <AppContext.Provider value={{ ...stateContext }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext, initialState };
