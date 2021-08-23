/**
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * Given an array of integers nums sorted in ascending order, 
 * find the starting and ending position of a given target value.
 * If target is not found in the array, return [-1, -1].
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * Example 1:
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 * 
 * Example 2:
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 * 
 * Example 3:
 * Input: nums = [], target = 0
 * Output: [-1,-1]
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums: number[], target: number): number[] => {
    if (nums.length === 0) [-1, -1];
    let left = 0;
    let right = nums.length - 1;
    let mid = Math.floor((left + right) / 2);
    while (nums[mid] !== target && left <= right) {
        if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
        mid = Math.floor((left + right) / 2);
    }
    return nums[mid] === target ? [(mid > 0) ? mid - 1 : mid, mid + 1] : [-1, -1];
};

console.log(searchRange([5,7,7,8,8,10], 8));