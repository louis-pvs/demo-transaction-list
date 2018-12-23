import reducer, { INITIAL_STATE } from "./reducer";
import * as actions from "./actions";

describe("reducer", () => {
  it("should update list", () => {
    const mockList = [{ id: 1, title: "mock test" }];
    const expectedResult = { ...INITIAL_STATE, transactionList: mockList };

    expect(reducer(INITIAL_STATE, actions.updateList(mockList))).toEqual(
      expectedResult
    );
  });
  it("should update selected detail", () => {
    const mockDetails = { id: 2, title: "mock item" };
    const expectedResult = { ...INITIAL_STATE, transactionDetail: mockDetails };
    expect(
      reducer(INITIAL_STATE, actions.updateSelectedDetail(mockDetails))
    ).toEqual(expectedResult);
  });
});
