const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {

  let obj1 = {};
  let obj2 = {};
  let res = 0;
    for (let i in s1) {

      obj1[`${s1[i]}`] = obj1[`${s1[i]}`] + 1 || 1;
    }

    for (let i in s2) {

      obj2[`${s2[i]}`] = obj2[`${s2[i]}`] + 1 || 1;
    }
    
    for (let key in obj1) {

      if (key in obj2) {
          res += Math.min(obj2[key], obj1[key])
      }
    }
    return res;
}

module.exports = {
  getCommonCharacterCount
};
