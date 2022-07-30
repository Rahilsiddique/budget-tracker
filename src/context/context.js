import React, { useReducer, createContext } from "react";
import reducerContext from "./reducerContext";

const initailState = JSON.parse(localStorage.getItem("transactions")) || [];

export const ExpenseTrackerContext = createContext(initailState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(reducerContext, initailState);

  console.log(transactions);

  // dispatch functions || Action creators
  const deleteItem = (id) => dispatch({ type: "DELETE_ITEM", payload: id });
  const addItem = (transaction) =>
    dispatch({ type: "ADD_ITEM", payload: transaction });

  const balance = transactions.reduce(
    (acc, currVal) =>
      currVal.type === "Expense" ? acc - currVal.amount : acc + currVal.amount,
    0
  );

  return (
    <ExpenseTrackerContext.Provider
      value={{ deleteItem, addItem, transactions, balance }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
