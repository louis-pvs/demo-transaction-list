import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import mockAdapter from "axios-mock-adapter";

import {
  getTransactionList,
  getTransactionDetail,
  refundTransaction
} from "./effects";
import TYPES from "./TYPES";
import { api as axios } from "./index";

const mock = new mockAdapter(axios);
const mockList = [{ id: 1, title: "mock lsit" }];
const mockDetail = { id: 2, title: "mock item" };
const modifiedDetail = {
  ...mockDetail,
  status: 0,
  modifiedDate: new Date().getTime()
};

const middlewares = [thunk.withExtraArgument(axios)];
const mockStore = configureStore(middlewares);
mock
  .onGet("/api/history")
  .reply(200, mockList)
  .onGet(/\/api\/history\/\d+/)
  .reply(200, mockDetail)
  .onPut(/\/api\/history\/\d+/)
  .reply(200, modifiedDetail);

describe("effects", () => {
  const store = mockStore({});
  beforeEach(() => {
    store.clearActions();
  });
  it("should dispatch payload with list", () => {
    const expectedPayload = {
      type: TYPES.UPDATE_STATE,
      payload: { transactionList: mockList }
    };
    return store.dispatch(getTransactionList()).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual([expectedPayload]);
    });
  });
  it("should dispatch payload with details", () => {
    const expectedPayload = {
      type: TYPES.UPDATE_STATE,
      payload: { transactionDetail: mockDetail }
    };
    return store.dispatch(getTransactionDetail(2)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual([expectedPayload]);
    });
  });
  it("should dispatch payload with edited details", () => {
    const expectedPayload = {
      type: TYPES.UPDATE_STATE,
      payload: { transactionDetail: modifiedDetail }
    };
    return store.dispatch(refundTransaction(mockDetail)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual([expectedPayload]);
    });
  });
});
