/***
 * https://leetcode.com/problems/search-insert-position/
 * 
 * Given a sorted array of distinct integers
 * and a target value, return the index if the target is found. 
 * If not, return the index where it would be if it were inserted in order.
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * Example 1:
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 * 
 * Example 2:
 * Input: nums = [1,3,5,6], target = 2
 * Output: 1
 * 
 * Example 3:
 * Input: nums = [1,3,5,6], target = 7
 * Output: 4
 * 
 * Example 4:
 * Input: nums = [1,3,5,6], target = 0
 * Output: 0
 * 
 * Example 5:
 * Input: nums = [1], target = 0
 * Output: 0
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums: number[], target: number): number => {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] < target) {
            i++;
        }
        if (nums[i] === target) {
            return i;
        }
        if (nums[i] > target) {
            return i;
        }
    }
};

console.log(searchInsert([1, 3, 5, 6], 5));