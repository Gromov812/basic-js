const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(d) {
  if (arguments.length == 0)  return 'Unable to determine the time of year!';
  if (d instanceof Date == false) return "Invalid date!";
  
  try {
      d.toLocaleString()
  }
  catch(e) {
     if (e) return "Invalid date!";
  }

  if (!(d instanceof Date) && isNaN(d.getMonth)) throw new Error('THROWN');
      d = new Date(d);
  d = d.getUTCMonth()+1
    if (!d) return "Invalid date!";

    let res;
    
    if (d >= 1 & d <=2) res = 'winter';
    if (d >=12) res = 'winter';
    if (d >= 3 & d <=5) res = 'spring';
    if (d >= 6 & d <=8) res = 'summer';
    if (d >= 9 & d <=11) res = 'autumn';
        
    return res;
}


module.exports = {
  getSeason
};
