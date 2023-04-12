const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(m) {
  if (!Array.isArray(m)) return false;
  return m.filter(el => typeof(el) === 'string').map(el => {
    el = el.trim()
    el = el[0].toUpperCase();
    return el[0];
}).sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');}

module.exports = {
  createDreamTeam
};
