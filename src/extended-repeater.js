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
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(s, o) {

  let res = new Array(o.repeatTimes).fill(s);
  res = res.map(el => {
    let addition;
      el = `${el}`;
    if ('addition' in o) {
      addition = `${o.addition}`;
      if ('additionRepeatTimes' in o) {
        let addArr = new Array(o.additionRepeatTimes).fill(addition);

         addition = addArr.join(`${o.additionSeparator || '|'}`)
        
      }
    }
    if ('addition' in o ) {
      el = el+addition;
    }

    return el
  })

  return res.join(`${o.separator || '+'}`);

}

module.exports = {
  repeater
};
