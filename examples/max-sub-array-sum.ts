/***
 * Write a function called maxSubarraySum which accepts an array
 * of integers and a number called N. The function should
 * calculate the maximum sum of N consecutive elements in
 * the array
 *
 * Example:
 *
 * maxSubArraySum([1,2,5,2,8,1,5], 2) // 10
 * maxSubArraySum([1,2,5,2,8,1,5], 4) // 17
 * maxSubArraySum([4,2,1,6], 1) // 6
 * maxSubArraySum([], 4) // null
 */

/**
 * @param {Array} arr
 * @param {Number} num
 */
const maxSubArraySum = (arr: number[], num: number) => {
  let maxSum: number = 0;
  let tempSum: number = 0;

  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};
export default maxSubArraySum;
