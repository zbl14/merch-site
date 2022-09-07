import React from "react";
import StockList from "./StockList";
import NewPurchaseForm from "./NewPurchaseForm";

class MerchSiteControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      mainStockList: [],
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      formVisible: !prevState.formVisible,
    }));
  };

  render() {
    let curVisibleState = null;
    let buttonText = null;
    if (this.state.formVisible) {
      curVisibleState = <NewPurchaseForm />;
      buttonText = "Return to Stock List";
    } else {
      curVisibleState = <StockList stockList={this.state.mainStockList} />;
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
