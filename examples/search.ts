/***
 * Given a sorted array of integers, write a function called search, that accepts
 * a value and returns the index where the value passed to the function is
 * located. if the value is not found, return -1;
 */

/**
 * @param {Array} arr
 * @param {Number} num
 */
const search = (arr: number[], num: number) => {
  let min: number = 0;
  let max: number = arr.length - 1;

  while (min <= max) {
    let mid: number = Math.floor((max + min) / 2);
    if (arr[mid] < num) {
      min = mid + 1;
    } else if (arr[mid] > num) {
      max = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

export default search;
