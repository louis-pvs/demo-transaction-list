import dayjs from "dayjs";

/**
 *
 * @param {number} timestamp
 * @return {string} formated time
 */
export function formatDate(timestamp) {
  return dayjs(timestamp).format("HH:MMA, MMM DD, YYYY");
}
