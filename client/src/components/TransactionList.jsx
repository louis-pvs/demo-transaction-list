import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { getTransactionList } from "../stateReducers/effects";

class TransactinList extends React.PureComponent {
  static propTypes = {
    getTransactionList: PropTypes.func,
    transactionList: PropTypes.arrayOf(PropTypes.shape())
  };
  componentDidMount() {
    this.props.getTransactionList();
  }
  render() {
    const { transactionList } = this.props;
    if (!transactionList.length) return <li>list is empty.</li>;
    return transactionList.map(({ title, id }) => (
      <li key={id}>
        {title} <Link to={`/${id}`}>Detail</Link>
      </li>
    ));
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
