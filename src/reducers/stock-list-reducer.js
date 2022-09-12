const reducer = (state = {}, action) => {
  const { name, amount, id } = action;
  switch (action.type) {
    case "ADD_MERCH":
      return {
        ...state,
        ...{
          [id]: {
            name: name,
            amount: amount,
            id: id,
          },
        },
      };
    case "DELETE_MERCH":
      let newState = { ...state };
      delete newState[id];
      return newState;
    case "SELL_ONE":
      return {
        ...state,
        ...{
          [id]: {
            name: name,
            amount: amount - 1,
            id: id,
          },
        },
      };
    default:
      return state;
  }
};

export default reducer;
