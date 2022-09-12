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
    default:
      return state;
  }
};

export default reducer;
