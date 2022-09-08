import React from "react";
import PropTypes from "prop-types";

const MerchDetail = (props) => {
  const { merch, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Detail of {merch.name}</h1>
      <h3>Stock: {merch.amount}</h3>
      <button onClick={props.onClickingEdit}>Update Merch</button>
      <button onClick={() => onClickingDelete(merch.id)}>Remove Merch</button>
    </React.Fragment>
  );
};

MerchDetail.propTypes = {
  merch: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default MerchDetail;
