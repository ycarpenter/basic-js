const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = str.replace(/(.)\1+/g, (substr, char) => substr.length + char)
  return res;
}

module.exports = {
  encodeLine
};
