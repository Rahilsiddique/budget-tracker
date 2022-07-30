const reducerContext = (state, action) => {
  let transactions;
  switch (action.type) {
    case "DELETE_ITEM":
      transactions = state.filter((e) => e.id !== action.payload);
      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;

    case "ADD_ITEM":
      transactions = [action.payload, ...state];
      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;

    default:
      return state;
  }
};

export default reducerContext;
