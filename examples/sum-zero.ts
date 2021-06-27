/**
 * Write a function called sumZero which accepts a sorted
 * array of integers. The function should find the first pair
 * where the sum is 0. Return an array that includes both
 * values that sum to zero or undefined if a pair does not exist
 * Example:
 * sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
 * sumZero([-2,0,1,3]) // undefined
 * sumZero([1,2,3]) // undefined
 */
const sumZero = (arr: number[]) => {
  if (arr.length === 0) return 0;

  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    const sum = arr[i] + arr[j];
    if (sum === 0) {
      return [arr[i], arr[j]];
    } else if (sum > 0) {
      j--;
    } else {
      i++;
    }
  }
};

export default sumZero;
