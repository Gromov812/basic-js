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
 function encodeLine(s) {

  s = [...s];
  let res = [];

    let counter = 1;
    s.forEach((el,i,arr) => {

        if (el == arr[i+1]) counter++;

        else {
            if (counter != 1) res.push(counter);
            res.push(el);
            counter = 1;
        }  
        

    })
    return res.join('');
  }


module.exports = {
  encodeLine
};
