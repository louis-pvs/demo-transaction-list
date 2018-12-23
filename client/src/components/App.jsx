import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import TransactionList from "./TransactionList";
import TransactionDetail from "./TransactionDetail";

import store from "../stateReducers";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <h1>Transaction History</h1>
          <TransactionList />
          <Route path={"/:id"} component={TransactionDetail} />
        </Fragment>
      </Router>
    </Provider>
  );
}
