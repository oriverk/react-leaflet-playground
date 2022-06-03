/* eslint-disable no-param-reassign */
/**
 * Decimal adjustment of a number.
 *
 * @param {String}  type  The type of adjustment.
 * @param {Number}  value The number.
 * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
 * @returns {Number} The adjusted value.
 */
function decimalAdjust(type: "round" | "floor" | "ceil", value: any, exp: number) {
  // If the exp is undefined or zero...
  if (typeof exp === "undefined" || +exp === 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  // If the value is not a number or the exp is not an integer...
  if (Number.isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
    return NaN;
  }
  // Shift
  value = value.toString().split("e");
  value = Math[type](+`${value[0]}e${value[1] ? +value[1] - exp : -exp}`);
  // Shift back
  value = value.toString().split("e");
  return +`${value[0]}e${value[1] ? +value[1] + exp : exp}`;
}

// Decimal round
export const round10 = (value: number, exp: number) => decimalAdjust("round", value, exp);
// Decimal floor
export const floor10 = (value: number, exp: number) => decimalAdjust("floor", value, exp);
// Decimal ceil
export const ceil10 = (value: number, exp: number) => decimalAdjust("ceil", value, exp);
