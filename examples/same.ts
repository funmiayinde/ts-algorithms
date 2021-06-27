/**
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the
 * array has it's corresponding value squared in the second
 * array. The frequency of the values must be the same.
 * Examples:
 *  same([1,2,3], [4, 1, 9]) // true
 *  same([1,2,3], [1, 9]) // false
 *  same([1,2,1], [4,4,1]) // fales (must be same frequency)
 * */

/**
 * @params {Array} arr1 The first array
 * @params {Array} arr2 The second array
 */
const same = (arr1: any[], arr2: any[]) => {
  if (arr1.length !== arr2.length) return false;

  const frequencyCounter1: any = {};
  const frequencyCounter2: any = {};

  for (let elem of arr1) {
    frequencyCounter1[elem] = (frequencyCounter1[elem] || 0) + 1;
  }

  for (let elem of arr2) {
    frequencyCounter2[elem] = frequencyCounter2[elem] || 0 || 1;
  }

  for (let key in frequencyCounter1) {
    //@ts-ignore
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    //@ts-ignore
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
};

export default same;
