import { createAction } from "redux-actions";

import ACTION_TYPE from "./TYPES";

// actions.js
// handle actions creations

export const updateList = createAction(
  ACTION_TYPE.UPDATE_STATE,
  transactionList => ({ transactionList })
);

export const updateSelectedDetail = createAction(
  ACTION_TYPE.UPDATE_STATE,
  transactionDetail => ({ transactionDetail })
);
