import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

const NewPurchaseForm = (props) => {
  const handleNewPurchaseFormSubmission = (event) => {
    event.preventDefault();
    props.onNewFormCreation({
      name: event.target.name.value,
      amount: parseInt(event.target.amount.value),
      id: v4(),
    });
  };

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewPurchaseFormSubmission}
        buttonText="Purchase"
      />
    </React.Fragment>
  );
};

NewPurchaseForm.propTypes = {
  onNewFormCreation: PropTypes.func,
};

export default NewPurchaseForm;
