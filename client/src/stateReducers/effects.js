import * as actions from "./actions";

export function getTransactionList() {
  return function _makeRequest(dispatch, _, api) {
    return api
      .get("history")
      .then(res => res.data)
      .then(actions.updateList)
      .then(dispatch)
      .catch(err => dispatch({ type: "ERROR", payload: { err } }));
  };
}

export function getTransactionDetail(id) {
  return function _makeRequest(dispatch, _, api) {
    return api
      .get(`history/${id}`)
      .then(res => res.data)
      .then(actions.updateSelectedDetail)
      .then(dispatch)
      .catch(err => dispatch({ type: "ERROR", payload: { err } }));
  };
}

export function refundTransaction(selectedDetail) {
  return function _makeRequest(dispatch, _, api) {
    const editedDetail = {
      ...selectedDetail,
      status: 0,
      modifiedDate: new Date().getTime()
    };
    const { id } = editedDetail;

    return api
      .put(`history/${id}`, editedDetail)
      .then(res => res.data)
      .then(actions.updateSelectedDetail)
      .then(dispatch)
      .catch(err => dispatch({ type: "ERROR", payload: { err } }));
  };
}
