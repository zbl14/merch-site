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

  render() {
    let curVisibleState = null;
    let buttonText = null;
    if (this.state.formVisible) {
      curVisibleState = <StockList />;
      buttonText = "Return to Stock List";
    } else {
      curVisibleState = <NewPurchaseForm />;
      buttonText = "Purchase";
    }
    return (
      <React.Fragment>
        {curVisibleState};<button>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default MerchSiteControl;
