import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

const EditMerchForm = (props) => {
  const { merch } = props;
  const handleEditMerchFormSubmission = (event) => {
    event.preventDefault();
    props.onEditMerch({
      name: event.target.name.value,
      amount: event.target.amount.value,
      id: merch.id,
    });
  };
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditMerchFormSubmission}
        buttonText="Update"
      />
    </React.Fragment>
  );
};

EditMerchForm.propTypes = {
  merch: PropTypes.object,
  onEditMerch: PropTypes.func,
};

export default EditMerchForm;
