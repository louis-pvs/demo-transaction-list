import ACTION_TYPE from "./TYPES";

export const INITIAL_STATE = {
  transactionList: [],
  transactionDetail: null
};

export default function historyReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPE.INITIAL_ALL:
      return INITIAL_STATE;
    case ACTION_TYPE.UPDATE_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
