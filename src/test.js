const deeperFakeDate = {
    toString() {
        return Date.prototype.toString.call(new Date());
    },
    getMonth() {
        return Date.prototype.getMonth.call(new Date());
    },
    getFullYear() {
        return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
    },
    getDate() {
        return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
    },
    getHours() {
        return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
    },
    getMinutes() {
        return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
    },
    getSeconds() {
        return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
    },
    getMilliseconds() {
        return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
    },
    getDay() {
        return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
    },
    [Symbol.toStringTag]: 'Date'
};

Object.setPrototypeOf(deeperFakeDate, Object.getPrototypeOf(new Date()));

// function getSeason(d) {
//     if (arguments.length == 0)  return 'Unable to determine the time of year!';
//     if (d instanceof Date == false) return "Invalid date!";
    
//     try {
//         d.toLocaleString()
//     }
//     catch(e) {
//        if (e) return "Invalid date!";
//     }

//     if (!(d instanceof Date) && isNaN(d.getMonth)) throw new Error('THROWN');
//         d = new Date(d);
//     d = d.getUTCMonth()+1
//       if (!d) return "Invalid date!";
  
//       let res;
      
//       if (d >= 1 & d <=2) res = 'winter';
//       if (d >=12) res = 'winter';
//       if (d >= 3 & d <=5) res = 'spring';
//       if (d >= 6 & d <=8) res = 'summer';
//       if (d >= 9 & d <=11) res = 'autumn';
          
//       return res;
//   }
  
// console.log(getSeason(deeperFakeDate));
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
        if (n < 1 || n > this.chain.length || !Number.isInteger(n) ) {
            
            this.chain = [];
            throw new Error ('You can\'t remove incorrect link!');
            
        }
        this.chain.splice(n-1,1);
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


console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4));



