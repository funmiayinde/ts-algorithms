/**
 * Find the missing numnber in an array
 *
 * Example
 *
 * missingNumber([1,2,3,4,5,6,7,10]) // return 9
 */

/**
 * @param {Array} arr
 * @returns {boolean}
 */
const missingNumber = (arr: number[]): number => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      return arr[i] + 1;
    }
  }
  return 0;
};
