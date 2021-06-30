/**
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times. 
 * You may assume that the majority element always exists in the array.
 *  
 *  Example 1:
 *  Input: nums = [3,2,3]
 *  Output: 3
 * 
 *  Example 1:
 *  Input: nums = [2,2,1,1,1,2,2]
 *  Output: 2
 */


/**
 * @param {Array} arr
 * @returns {Number}
 */
const majorityElement = (arr: number[]): any | number => {
    const checker = {};
    let max: any = 0;
    let maxchar: any | number;

    for (let elem of arr) {
        if (checker[elem]) {
            checker[elem]++;
        } else {
            checker[elem] = 1;
        }
    }
    for (let key in checker) {
        if (checker[key] > max) {
            max = checker[key];
            maxchar = key;
        }
    }
    return maxchar;
}

/**
 * @param {Number[]} nums
 * @returns {Number}
 */
const majorityElement2 = (nums: number[]): any | number => {
    let count = 0;
    let major = 0;

    for (const num of nums) {
        if (count == 0) {
            major = num;
            count = 1;
        } else {
            count += (major === num ? 1 : -1);
        }
    }
    return major;
}

console.log(majorityElement2([2,2,1,1,1,2,2]));