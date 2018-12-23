import * as actions from "./actions";

export function getTransactionList() {
  return function _makeRequest(dispatch, _, api) {
    return api
      .get("history")
      .then(res => res.data)
      .then(actions.updateList)
      .then(dispatch)
      .catch(_handleError);
  };
}

export function getTransactionDetail(id) {
  return function _makeRequest(dispatch, _, api) {
    return api
      .get(`history/${id}`)
      .then(res => res.data)
      .then(actions.updateSelectedDetail)
      .then(dispatch)
      .catch(_handleError);
  };
}

function _handleError(err) {
  console.error(err);
}
