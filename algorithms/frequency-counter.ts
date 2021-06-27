/**
 * Write a function called sam, which accepts two arrays.
 * The funtion should return true if every value in the
 * array has it's corresponding value squared in the second array.
 * The frequency of values must be the same
 *
 * Example:
 *
 * same([1,2,3], [4,1,9]) //True
 * same([1,2,3], [1,9]) //False
 * same([1,2,1], [4,4,1]) //false (must be same frequency)
 **/

/**
 * @param arr1
 * @param arr2
 * return boolean
 */
const same = (arr1: number[], arr2: number[]): boolean => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1: any = {};
    let frequencyCounter2: any = {};
    for (let elem of arr1) {
        frequencyCounter1[elem] = (frequencyCounter1[elem] || 0) + 1;
    }
    for (let elem of arr2) {
        frequencyCounter2[elem] = (frequencyCounter2[elem] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        // @ts-ignore
        if (!frequencyCounter2[key ** 2]){
            return false;
        }
        // @ts-ignore
        if (frequencyCounter2[key ** 2] !== frequencyCounter2[key]) {
            return false;
        }
    }
    return true;
};
