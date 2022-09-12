import React from "react";
import Merch from "./Merch";
import PropTypes from "prop-types";

const StockList = (props) => {
  return (
    <React.Fragment>
      {props.stockList.map((merch) => (
        <Merch
          whenMerchClicked={props.onMerchSelection}
          name={merch.name}
          amount={merch.amount}
          id={merch.id}
          key={merch.id}
        />
      ))}
    </React.Fragment>
  );
};

StockList.propTypes = {
  stockList: PropTypes.array,
  onMerchSelection: PropTypes.func,
};

export default StockList;
