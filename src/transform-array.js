const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!(arr instanceof Array)) return '\'arr\' parameter must be an instance of the Array!';
  let res = [...arr];

  arr.forEach((el,i,arr) => {
    switch (el) {
      case '--discard-next':
          res[i] = '';
          res[i+1] = '';
        break;
      case '--discard-prev':
          res[i] = '';
          res[i-1] = '';
        break;
      case '--double-next':
        res[i] = res[i+1];
        break;
      case '--double-prev':
        res[i] = res[i-1];
      break;
    }
  })
  return res.filter(el => el != '');
}

module.exports = {
  transform
};
