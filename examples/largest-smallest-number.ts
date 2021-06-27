/**
 * Find the largest and smallest numer in an unsorted array of
 * integers
 *
 * Example
 *
 * findMaxMin([1,2,3,4, 100]) // {"max": 100, "min" : 1};
 */

/**
 * @param {Array} arr
 * @returns {any}
 */
const findMaxMin = (arr: number[]): any => {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { max, min };
};
