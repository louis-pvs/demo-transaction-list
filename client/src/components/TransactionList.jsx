import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { getTransactionList } from "../stateReducers/effects";
import { formatAmount, formatDate } from "../utils";

import { StyledSection, StyledDateSpan } from "../styles";

const StyledTable = styled.table`
  border-collapse: collapse;
`;

const StyledTr = styled.tr`
  td {
    background-color: transparent;
  }
  &:hover {
    td {
      background-color: ${({ theme }) => theme.$color.background__dark};
    }
  }
  &:not(:last-child) {
    td {
      border-bottom: 1px solid ${({ theme }) => theme.$color.border};
    }
  }
`;

const StyledTd = styled.td`
  padding: ${({ theme }) => `${theme.$size.reg} ${theme.$size.sm}`};
  transition: background-color 0.12s ease-in-out;
  min-width: 150px;
  &:last-child {
    text-align: right;
  }
  &:only-child {
    text-align: center;
    color: ${({ theme }) => theme.$color.text__light};
  }
`;

class TransactinList extends React.PureComponent {
  static propTypes = {
    getTransactionList: PropTypes.func,
    transactionList: PropTypes.arrayOf(PropTypes.shape())
  };
  componentDidMount() {
    this.props.getTransactionList();
  }
  renderList() {
    const { transactionList } = this.props;
    if (!transactionList.length)
      return (
        <StyledTr>
          <StyledTd colSpan="3">
            <small>List looks empty, start adding transaction.</small>
          </StyledTd>
        </StyledTr>
      );
    return transactionList.map(
      ({ title, id, amount, modifiedDate, category, status }) => (
        <StyledTr key={id}>
          <StyledTd>
            <Link to={`/${id}`}>
              <strong>{title}</strong>
            </Link>
            <br />
            <small>{category}</small>
          </StyledTd>
          <StyledTd>
            <StyledDateSpan>{formatDate(modifiedDate)}</StyledDateSpan>
          </StyledTd>
          <StyledTd>{formatAmount(status ? -amount : amount)}</StyledTd>
        </StyledTr>
      )
    );
  }
  render() {
    return (
      <StyledSection style={{ textAlign: "initial" }}>
        <h1>Transaction History</h1>
        <StyledTable>
          <thead>
            <tr>
              <StyledTd>Counter/party</StyledTd>
              <StyledTd>Last Update</StyledTd>
              <StyledTd>Amount</StyledTd>
            </tr>
          </thead>
          <tbody>{this.renderList()}</tbody>
        </StyledTable>
      </StyledSection>
    );
  }
}

const mapStateToProps = state => ({
  transactionList: state.transactionList
});

export default connect(
  mapStateToProps,
  // map actions to props
  { getTransactionList }
)(TransactinList);
