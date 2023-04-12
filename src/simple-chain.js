const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(n) {
    n = `${n}`
    this.chain = [...this.chain, n];
    return this;
  },
  removeLink(n) {
    if (n-1 < 0 || n-1 > this.chain.length-1 || isNaN(n)) return "You can\'t remove incorrect link!"
    this.chain.splice(n-1,1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    this.chain = this.chain.map(el => `( ${el} )`).join('~~');
    return this.chain;
  }
};

module.exports = {
  chainMaker
};