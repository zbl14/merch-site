import React from "react";
import StockList from "./StockList";
import NewPurchaseForm from "./NewPurchaseForm";
import MerchDetail from "./MerchDetail";
import EditMerchForm from "./EditMerchForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class MerchSiteControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      selectedMerch: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedMerch !== null) {
      this.setState({
        formVisible: false,
        selectedMerch: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisible: !prevState.formVisible,
      }));
    }
  };

  handleAddingNewMerchToList = (newMerch) => {
    const { dispatch } = this.props;
    const { id, name, amount } = newMerch;
    const action = {
      type: "ADD_MERCH",
      id: id,
      name: name,
      amount: amount,
    };
    dispatch(action);
    this.setState({
      formVisible: false,
    });
  };

  handleChangingSelectedMerch = (id) => {
    const selectedMerch = this.props.mainStockList[id];
    this.setState({ selectedMerch: selectedMerch });
  };

  handleClickingSellMerch = () => {
    const selectedMerch = this.state.selectedMerch;
    let sellMerch;
    if (selectedMerch.amount > 1) {
      sellMerch = { ...selectedMerch, amount: selectedMerch.amount - 1 };
    } else {
      sellMerch = { ...selectedMerch, amount: "Out of stock" };
    }
    const newSelectedMerch = this.state.mainStockList
      .filter((merch) => merch.id !== this.state.selectedMerch.id)
      .concat(sellMerch);
    this.setState({
      mainStockList: newSelectedMerch,
      selectedMerch: sellMerch,
    });
  };

  // handleClickingSellMerch = () => {
  //   const selectedMerch = this.props.mainStockList[id];
  //   let sellMerch;
  //   if (selectedMerch.amount > 1) {
  //     sellMerch = { ...selectedMerch, amount: selectedMerch.amount - 1 };
  //   } else {
  //     sellMerch = { ...selectedMerch, amount: "Out of stock" };
  //   }
  //   const newSelectedMerch = this.state.mainStockList
  //     .filter((merch) => merch.id !== this.state.selectedMerch.id)
  //     .concat(sellMerch);
  //   this.setState({
  //     mainStockList: newSelectedMerch,
  //     selectedMerch: sellMerch,
  //   });
  // };

  handleDeletingMerch = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: "DELETE_MERCH",
      id: id,
    };
    dispatch(action);
    this.setState({
      selectedMerch: null,
    });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingMerchInList = (merchToEdit) => {
    const { dispatch } = this.props;
    const { id, name, amount } = merchToEdit;
    const action = {
      type: "ADD_MERCH",
      id: id,
      name: name,
      amount: amount,
    };
    dispatch(action);
    this.setState({
      editing: false,
      selectedMerch: null,
    });
  };

  render() {
    let curVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      curVisibleState = (
        <EditMerchForm
          merch={this.state.selectedMerch}
          onEditMerch={this.handleEditingMerchInList}
        />
      );
      buttonText = "Return to Stock List";
    } else if (this.state.selectedMerch != null) {
      curVisibleState = (
        <MerchDetail
          merch={this.state.selectedMerch}
          OnClickingSellMerch={this.handleClickingSellMerch}
          onClickingDelete={this.handleDeletingMerch}
          onClickingEdit={this.handleEditClick}
        />
      );
      buttonText = "Return to Stock List";
    } else if (this.state.formVisible) {
      curVisibleState = (
        <NewPurchaseForm onNewFormCreation={this.handleAddingNewMerchToList} />
      );
      buttonText = "Return to Stock List";
    } else {
      curVisibleState = (
        <StockList
          stockList={this.props.mainStockList}
          onMerchSelection={this.handleChangingSelectedMerch}
        />
      );
      buttonText = "Purchase";
    }
    return (
      <React.Fragment>
        {curVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mainStockList: state,
  };
};

MerchSiteControl = connect(mapStateToProps)(MerchSiteControl);

MerchSiteControl.propTypes = {
  mainStockList: PropTypes.object,
};

export default MerchSiteControl;
