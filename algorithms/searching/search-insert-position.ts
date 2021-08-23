/**
 *  https://leetcode.com/problems/search-insert-position/
 *
 * Given a sorted array of distinct integers and a target value,
 * return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * You must write an algorithm with O(log n) runtime complexity.
 * Example 1:
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 *
 * Example 2:
 *
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
 *
 * Input: nums = [1], target = 0
 * Output: 0
 *
 **/

const searchInsertPosition = (arr: number[], target: number): number =>{
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor((left + right) / 2);

    while (arr[mid] !== target && left <= right) {
        if (target < arr[mid]){
            right = mid - 1;
        }else {
            left = mid + 1;
        }
        mid = Math.floor((left + right) / 2);
    }
    return arr[mid] === target ? mid : mid + 1;
};
console.log(searchInsertPosition([1,3,5,6], 7));
