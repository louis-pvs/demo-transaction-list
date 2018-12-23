import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getTransactionDetail } from "../stateReducers/effects";

class TransactionDetail extends React.PureComponent {
  static propTypes = {
    transactionDetail: PropTypes.shape({
      category: PropTypes.string,
      amount: PropTypes.number,
      title: PropTypes.string,
      id: PropTypes.number
    }),
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    getTransactionDetail: PropTypes.func
  };
  static getDerivedStateFromProps(props, state) {
    if (state.transactionId !== props.match.params.id) {
      props.getTransactionDetail(props.match.params.id);
    }
    return {
      transactionDetail: props.transactionDetail,
      transactionId: props.match.params.id
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      transactionId: props.match.params.id,
      transactionDetail: props.transactionDetail
    };
  }
  componentDidMount() {
    this.props.getTransactionDetail(this.state.transactionId);
  }

  render() {
    const { transactionDetail } = this.state;
    if (!transactionDetail) return null;
    const { category, amount, title } = transactionDetail;
    return (
      <section>
        <h2>{title}</h2>
        <h4>{category}</h4>
        <p>{amount}</p>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  transactionDetail: state.transactionDetail
});

export default connect(
  mapStateToProps,
  // map action to props
  { getTransactionDetail }
)(TransactionDetail);
