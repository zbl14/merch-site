import React from "react";
import PropTypes from "prop-types";

const Merch = (props) => {
  return (
    <React.Fragment>
      <div
        onClick={() => {
          props.whenMerchClicked(props.id);
        }}
      >
        <h3>Merch Name: {props.name}</h3>
        <h3>Stock: {props.amount}</h3>
        <hr />
      </div>
    </React.Fragment>
  );
};

Merch.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number,
  id: PropTypes.string,
  whenMerchClicked: PropTypes.func,
};

export default Merch;
