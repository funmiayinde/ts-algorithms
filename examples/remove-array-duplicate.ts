/**
 * Given an integer array nums sorted in non-decreasing order,
 * remove the duplicates in-place such that each unique element appears only once.
 *  The relative order of the elements should be kept the same.
 *
*   Example 1:
*   Input: nums = [1,1,2]
*   Output: 2, nums = [1,2]
*   Explanation: Your function should return length = 2,
*   with the first two elements of nums being 1 and 2 respectively.
*   It doesn't matter what you leave beyond the returned length.
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums: number[]): number => {
    for (let i = 0; i < nums.length; i++) {
        console.log('num-1', nums[i]);
        console.log('num-2', nums[i + 1]);
        console.log('---------------------');
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
        }
    }
    console.log('nums:', nums);
    return nums.length;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));