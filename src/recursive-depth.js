const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

 class DepthCalculator {

  constructor() {
      this.total = 0;
      this.counter = 0;
  }
  
  calculateDepth (arr) {
     
      arr.forEach(el => {
          if (Array.isArray(el)) checkArray.call(this,arr)
      })
      
      
      function checkArray (elem) {
         
  
          elem.forEach(el => {
              
              if (Array.isArray(el)) {
                  this.counter += 1;
                  checkArray.call(this,el)
              }
  
              
          });
  
          this.total = this.total < this.counter ? this.counter : this.total;
          this.counter = 0;
  
      }
  
      let res = this.total +1;
      this.total = 0;
      this.counter = 0;

  return res;
  }
}

module.exports = {
  DepthCalculator
};
