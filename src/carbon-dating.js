const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(s) {
  if (typeof(s) != 'string'
  || !!s.trim() == false
  || isNaN(+s)
  || s <= 0
  || s > 15) return false;
  s = +s;
  let t = (Math.log(MODERN_ACTIVITY / s))/(0.693/5730);
  return Math.ceil(t);
 
}

module.exports = {
  dateSample
};
