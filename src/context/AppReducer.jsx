export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSATION":
      return {
        ...state,
        transaction: state.transaction.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSATION":
      return {
        ...state,
        transaction: [action.payload, ...state.transaction],
      };

    default:
      return state;
  }
};
