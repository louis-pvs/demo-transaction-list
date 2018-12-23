import currency from "currency.js";

var options = {
  formatWithSymbol: true,
  separator: ","
};

/**
 *
 * @param {number} amount
 * @return {string} formated amount
 */
export function formatAmount(amount) {
  return currency(amount, options).format();
}
