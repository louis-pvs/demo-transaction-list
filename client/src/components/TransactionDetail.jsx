import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { formatDate, formatAmount } from "../utils";

import { getTransactionDetail } from "../stateReducers/effects";
import { updateSelectedDetail } from "../stateReducers/actions";
import { StyledSection, StyledDateSpan } from "../styles";

const StyledWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin: ${({ theme }) => theme.$size.sm};
  min-width: 25%;
`;

const StyledClose = styled(Link)`
  position: absolute;
  right: 0;
  top: 0;
  color: ${({ theme }) => theme.$color.text};
  &:visited {
    color: ${({ theme }) => theme.$color.text};
  }
`;

const StyledBadge = styled.small`
  background-color: ${({ theme }) => theme.$color.background__dark};
  color: ${({ theme }) => theme.$color.text__light};
  padding: ${({ theme }) => `${theme.$size.xs} ${theme.$size.sm}`};
  border-radius: 6px;
`;

const StyledAmount = styled.h1`
  font-weight: 100;
  margin: 0;
`;

const StyledCategory = styled.h3`
  margin: ${({ theme }) => theme.$size.sm};
  font-weight: 300;
  color: ${({ theme }) => theme.$color.text__light};
`;

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
    getTransactionDetail: PropTypes.func,
    updateSelectedDetail: PropTypes.func
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
  componentWillUnmount() {
    this.props.updateSelectedDetail(null);
  }

  render() {
    const { transactionDetail } = this.state;
    if (!transactionDetail) return null;
    const { category, amount, title, createdDate, status } = transactionDetail;
    return (
      <StyledWrapper>
        <StyledClose to="/">
          <small>X</small>
        </StyledClose>
        <h5>{status ? `Transfer` : "Refunded"}</h5>
        <StyledDateSpan>{formatDate(createdDate)}</StyledDateSpan>
        <div>
          <StyledSection style={{ display: "block" }}>
            <StyledAmount>
              {formatAmount(status ? -amount : amount)}
            </StyledAmount>
            <StyledCategory>{title}</StyledCategory>
            <StyledBadge>{category}</StyledBadge>
          </StyledSection>
        </div>
      </StyledWrapper>
    );
  }
}

const mapStateToProps = state => ({
  transactionDetail: state.transactionDetail
});

export default connect(
  mapStateToProps,
  // map action to props
  { getTransactionDetail, updateSelectedDetail }
)(TransactionDetail);
