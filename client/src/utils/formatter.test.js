import { formatDate } from "./formatDate";
import { formatAmount } from "./formatAmount";

describe("formatter", () => {
  it("should format date", () => {
    const expectedResult = "22:12PM, Dec 03, 2019";
    expect(formatAmount(1575382355431)).not.toBe(1575382355431);
    expect(formatDate(1575382355431)).toBe(expectedResult);
  });
  it("should format amount", () => {
    const expectedResult = "$103.00";
    expect(formatAmount(103)).not.toBe(103);
    expect(formatAmount(103)).toBe(expectedResult);
  });
});
