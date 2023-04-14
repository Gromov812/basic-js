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
      if (arguments.length == 0) n = ' ';
      n = `${n}`
    this.chain = [...this.chain, n];
    return this;
  },
  removeLink(n) {
<<<<<<< HEAD
    if (n < 1 || n > this.chain.length || !Number.isInteger(n) ) {
           
      this.chain = [];
      throw new Error ('You can\'t remove incorrect link!');
        } 
        
        this.chain.splice(n-1,1);
=======
    if (n-1 < 0 || n-1 > this.chain.length-1 || isNaN(n)) throw new Error (`You can't remove incorrect link!`);
    this.chain.splice(n-1,1);
>>>>>>> 5114711389963506e6b78decdfd0ef8a1da4e2be
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = this.chain.map(el => `( ${el} )`).join('~~');
    this.chain = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
