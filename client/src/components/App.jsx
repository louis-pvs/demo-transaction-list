import React from "react";
import styled from "styled-components";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import TransactionList from "./TransactionList";
import TransactionDetail from "./TransactionDetail";

import store from "../stateReducers";

const StyledContainer = styled.div`
  text-align: center;
  padding: ${props => props.theme.$size.reg};
`;

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <StyledContainer>
          <TransactionList />
          <Route path={"/:id"} component={TransactionDetail} />
        </StyledContainer>
      </Router>
    </Provider>
  );
}
