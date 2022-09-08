import React from "react";
import PropTypes from "prop-types";

const MerchDetail = (props) => {
  const { merch } = props;
  return (
    <React.Fragment>
      <h1>Detail of {merch.name}</h1>
      <h3>Stock: {merch.amount}</h3>
    </React.Fragment>
  );
};

MerchDetail.propTypes = {
  merch: PropTypes.object,
};

export default MerchDetail;
