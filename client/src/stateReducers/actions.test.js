import * as actions from "./actions";
import TYPES from "./TYPES";

describe("actions creator", () => {
  it(`should create action to update list`, () => {
    const mockList = [{ id: 1, title: "mock list" }];
    const expectedResult = {
      type: TYPES.UPDATE_STATE,
      payload: { transactionList: mockList }
    };
    expect(actions.updateList(mockList)).toEqual(expectedResult);
  });

  it(`should create action to update detail`, () => {
    const mockDetail = { id: 2, title: "mock item" };
    const expectedResult = {
      type: TYPES.UPDATE_STATE,
      payload: { transactionDetail: mockDetail }
    };
    expect(actions.updateSelectedDetail(mockDetail)).toEqual(expectedResult);
  });
});
