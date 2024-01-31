import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transaction: [
    // { id: 1, text: "Flower", amount: -20 },
    // { id: 2, text: "Salary", amount: 300 },
    // { id: 3, text: "Book", amount: -10 },
    // { id: 4, text: "Camera", amount: 150 },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransation(id) {
    dispatch({
      type: "DELETE_TRANSATION",
      payload: id,
    });
  }
  function addTransation(transaction) {
    dispatch({
      type: "ADD_TRANSATION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transaction: state.transaction,
        deleteTransation,
        addTransation,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
