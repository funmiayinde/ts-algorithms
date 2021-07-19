/***
 * Write function called binarySearch which accepts a sorted array and a value
 * and returns the index at which the value exist. Otherwise, return -1;
 * 
 * Example:
 * binarySearch([1,2,3,4,5], 2) // 1
 * binarySearch([1,2,3,4,5], 3) // 3
 * binarySearch([1,2,3,4,5], 5) // 4
 * binarySearch([1,2,3,4,5], 6) // -1
 * binarySearch([
 *     5, 6, 10, 12, 14, 18, 30, 34, 35, 37,
 *     40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10) // 2
 */

/**
 * @param {Array} arr
 * @param {Object} target
 * @returns {Number}
 */
const binarySearch = (arr: any[], target: any): number => {
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor((left + right) / 2);

    while (arr[mid] !== target && left <= right) {
        if (target < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
        mid = Math.floor((left + right) / 2)
    }
    return arr[mid] === target ? mid : -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 5));