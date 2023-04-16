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

// class DepthCalculator {

//     constructor() {
//         this.total = 1;
//         this.counter = 1;
//     }

//     calculateDepth (arr) {

//         arr.forEach(el => {
//             if (Array.isArray(el)) checkArray.call(this,arr)
//         })


//         function checkArray (elem) {


//             elem.forEach(el => {

//                 if (Array.isArray(el)) {
//                     this.counter += 1;
//                     checkArray.call(this,el)
//                 }


//             });

//             this.total = this.total < this.counter ? this.counter : this.total;
//             this.counter = 0;

//         }

//         let res = this.total +1;
//         this.total = 0;
//         this.counter = 0;

//     return res;
//     }
// }

// let d = new DepthCalculator();

//     console.log(d.calculateDepth([1, 2, 3, 4, 5, [1]]));






// try {
//     // Выполняете тут код, если он выдаст ошибку, то выполнятся будет код в catch
//     date.toLocalString(); // если код выдаст ошибку, то прокидывайте её в catch блоке 
// }
// catch(e) {
//     // 
//     if (e) throw new Error('Invalide date!') // Если в (e) у нас есть ошибка, то выполнится throw new Error
// }





function getSumOfDigits(n) {

   n = n.toString();
   let res = 0;

   reducer(n);
   
    function reducer (num) {
 res = 0;
        num = num.toString();
        console.log(`reducer`, num);

        for ( let i = 0; i < n.length; i++ ) {

            res += +num[i]
        
           }

    }

   if (res.toString().length > 1) {
    reducer(res)
   }
    return res;


}



console.log(getSumOfDigits(35));


