import React, { useContext, useReducer } from "react";
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
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = () => {};

  return (
    <AppContext.Provider value={{ ...state, addItem }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext, initialState };
