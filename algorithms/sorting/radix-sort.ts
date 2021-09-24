/**
 * Returns the digit in num at the given place value
 * @param {Number} num the number 
 * @param {Number} i the index number to look for
 * @returns {Number}
 */
const getDigit = (num: number, i: number) => {
    return Math.floor(Math.abs(num) /  Math.pow(10, i)) % 10;
};

/**
 * Returns the number of a digits in num
 * @param {Number} num the number to be counted
 * @returns {Number}
 */
const digitCount = (num: number) => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
};

/**
 * Returns the number of digits in the largest number in the list
 * @param {Array<Number>} arr 
 * @returns {Number}
 */
 const mostDigit = (arr: number[]) => {
    let maxDigits: number = 0;
    for (let i = 0; i < arr.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
 };

 /**
  * @param arr 
  * @returns {Array}
  */
 const radixSort = (arr: number[]) => {
     const mostDigitCount = mostDigit(arr);
     for (let k = 0; k < mostDigitCount; k++){
         let digitBucket: number[][] = Array.from({length: 10}, () => []);
         for (let i = 0; i < arr.length; i++){
             let digit = getDigit(arr[i], k);
             digitBucket[digit].push(arr[i]);
         }
         arr = [].concat(...digitBucket);
     }
     return arr;
 }

 console.log(radixSort([1000,300,1, 334332, 12]));