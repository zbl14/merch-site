import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

const NewPurchaseForm = () => {
  const handleNewPurchaseFormSubmission = (event) => {
    event.preventDefault();
    props.onNewFormCreation({
      name: event.target.name.value,
      amount: event.target.amount.value,
      id: v4(),
    });
  };

  return (
    <React.Fragment>
      <form onSubmit={handleNewPurchaseFormSubmission}>
        <input type="text" name="name" placeholder="Merch Name" />
        <input type="number" name="amount" placeholder="Purchase Amount" />
        <button type="submit">Purchase</button>
      </form>
    </React.Fragment>
  );
};

NewPurchaseForm.propTypes = {
  onNewFormCreation: PropTypes.func,
};

export default NewPurchaseForm;
