import React from "react";
import StockList from "./StockList";
import NewPurchaseForm from "./NewPurchaseForm";
import MerchDetail from "./MerchDetail";
import EditMerchForm from "./EditMerchForm";

class MerchSiteControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      mainStockList: [],
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
    const newMainStockList = this.state.mainStockList.concat(newMerch);
    this.setState({
      mainStockList: newMainStockList,
      formVisible: false,
    });
  };

  handleChangingSelectedMerch = (id) => {
    const selectedMerch = this.state.mainStockList.filter(
      (merch) => merch.id === id
    )[0];
    this.setState({ selectedMerch: selectedMerch });
  };

  handleDeletingMerch = (id) => {
    const newMainStockList = this.state.mainStockList.filter(
      (merch) => merch.id !== id
    );
    this.setState({
      mainStockList: newMainStockList,
      selectedMerch: null,
    });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingMerchInList = (merchToEdit) => {
    const editedMainStockList = this.state.mainStockList
      .filter((merch) => merch.id !== this.state.selectedMerch.id)
      .concat(merchToEdit);
    this.setState({
      mainStockList: editedMainStockList,
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
          stockList={this.state.mainStockList}
          onMerchSelection={this.handleChangingSelectedMerch}
        />
      );
      buttonText = "Purchase";
    }
    return (
      <React.Fragment>
        {curVisibleState};
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default MerchSiteControl;
