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
  n = [...`${n}`].map((el,i,arr) => {
      let t = [...arr];
      t.splice(i,1);
      el = t.join('')
      return +el;
  })
return Math.max(...n)
}

module.exports = {
  deleteDigit
};
