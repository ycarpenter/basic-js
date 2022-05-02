const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n).split('');
  let num = 0;

  for (let i = 0; i < arr.length; i++) {

    arr.splice(i, 1).join('');
    num = arr.join('') > num ? arr.join('') : num;
    arr = String(n).split('')
  }
  return +num;
}
module.exports = {
  deleteDigit
}; 
