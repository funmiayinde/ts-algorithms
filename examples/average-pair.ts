/***
 * Give a sorted array of integers and a target average,
 * determine if there is a pair of values in the array where
 * the average of the pair equals the target average.
 * There maybe more than one pair that matches the
 * average target
 *
 * Examples
 *
 * averagePair([1,2,3], 2.5) // true
 * averagePair([1,3,3,5,6,7,10,12,19], 8) // true
 * averagePair([-1,0,3,4,5,6], 4) // false
 * averagePair([], 4) // false
 */

/**
 * param {Num}
 */
const averagePair = (arr: number[], target: number) => {
    if (arr.length === 0) return false;

    let left: number = 0;
    let right: number = arr.length - 1;

    while (left < right) {
        const cal: number = (arr[left] + arr[right]) / 2;
        if (cal === target) {
            return true;
        } else if (cal < target) {
            left++;
        } else {
            right--;
        }
    }
    return false;
};

console.log(averagePair([1, 2, 3], 2.5));
