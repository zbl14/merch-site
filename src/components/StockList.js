import React from "react";
import Merch from "./Merch";
import PropTypes from "prop-types";

const StockList = (props) => {
  return (
    <React.Fragment>
      {props.stockList.map((merch, index) => (
        <Merch name={merch.name} amount={merch.amount} key={index} />
      ))}
    </React.Fragment>
  );
};

StockList.propTypes = {
  stockList: PropTypes.array,
};

export default StockList;
