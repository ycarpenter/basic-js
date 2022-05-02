const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRING PLUS00 PLUS00 PLUS ** STRINGPLUS00PLUS00PLUS ** STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = '';

  for(let i = 0; i < options.repeatTimes; i++) {
    res += `${str}`;
  }
  // let res = `${str}${options.addition}${options.additionSeparator}`.repeat(options.repeatTimes);
  return res;
}

console.log(repeater('STRING', { 
  repeatTimes: 3, 
  separator: '**', 
  addition: 'PLUS', 
  additionRepeatTimes: 3, 
  additionSeparator: '00'
}));

module.exports = {
  repeater
};
