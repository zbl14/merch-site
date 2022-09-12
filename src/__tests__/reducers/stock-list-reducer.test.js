import stockListReducer from "../../reducers/stock-list-reducer";

describe("stockList", () => {
  let action;
  const merchData = {
    name: "Nick Shoes",
    amount: 5,
    id: 1,
  };
  const curState = {
    1: {
      name: "Nick Shoes",
      amount: 5,
      id: 1,
    },
    2: {
      name: "Puma Shoes",
      amount: 1,
      id: 2,
    },
  };

  test("should return default state if there is no action type passed into the reducer", () => {
    expect(stockListReducer({}, { type: null })).toEqual({});
  });

  test("should successfully add new merch data to mainStockList", () => {
    const { name, amount, id } = merchData;
    action = {
      type: "ADD_MERCH",
      name: name,
      amount: amount,
      id: id,
    };
    expect(stockListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        amount: amount,
        id: id,
      },
    });
  });

  test("should successfully delete a merch", () => {
    action = {
      type: "DELETE_MERCH",
      id: 1,
    };
    expect(stockListReducer(curState, action)).toEqual({
      2: {
        name: "Puma Shoes",
        amount: 1,
        id: 2,
      },
    });
  });

  test("should decrease the amount of selected merch by 1", () => {
    const { name, amount, id } = merchData;
    action = {
      type: "SELL_ONE",
      name: name,
      amount: amount,
      id: id,
    };
    expect(stockListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        amount: amount - 1,
        id: id,
      },
    });
  });
});
