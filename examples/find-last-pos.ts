/**
 * Given a sorted array and a target number.
 * Return the index of the last target number in the array if it exists,
 *  otherwise return -1.
 * 
 * Examples:
 * Input: arr = [-3, 5, 6, 8, 10, 11, 15], target = 5
 * Output: 1
 * 
 * Input: arr = [-3, 5, 6, 6, 6, 10], target = 6
 * Output: 4
 * 
 * Input: arr = [-3, 5, 6, 6, 6, 10], target = 7
 * Output: -1
 */

/**
 * @param {Array<Number>} nums
 * @param {Number} target
 * @return  {Number}
 */
const findLastPos = (nums: number[], target: number): number => {
    let left = 0;
    let right = nums.length - 1;
    let mid = Math.floor((left + right) / 2);
    while (nums[mid] !== target && left <= right) {
        if (target < nums[mid]) {
            right = mid - 1;
        } else if (target > nums[mid]) {
            left = mid + 1;
        }
        mid = Math.floor((left + right) / 2);
    }
    return nums[mid] === target ? mid : -1;
};

console.log(findLastPos([-3, 5, 6, 8, 10, 11, 15], 5));