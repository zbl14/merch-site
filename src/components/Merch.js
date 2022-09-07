import React from "react";
import PropTypes from "prop-types";

const Merch = (props) => {
  return (
    <React.Fragment>
      <h3>Merch Name: {props.name}</h3>
      <h3>Stock: {props.amount}</h3>
      <hr />
    </React.Fragment>
  );
};

Merch.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number,
};

export default Merch;
