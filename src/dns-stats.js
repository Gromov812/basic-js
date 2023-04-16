const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

 function getDNSStats(domains) {
  let obj = {};
  
  domains = domains.map(el => {
      let acc = '';
      el = el.split('.').map(el => `.${el}`).reverse().forEach(el => {
          acc += el;
          obj[acc] = obj[acc] + 1 || 1;
      })

      return el;
  })
  return obj
}

module.exports = {
  getDNSStats
};
