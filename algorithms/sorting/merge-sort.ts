/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Array}
 */
const merge = (arr1: number[], arr2: number[]): number[] => {
    let m = 0;
    let n = 0;
    const result: number[] = [];
    while (m < arr1.length && n < arr2.length) {
        if (arr2[n] > arr1[m]) {
            result.push(arr1[m]);
            m++;
        } else {
            result.push(arr2[n]);
            n++;
        }
    }
    while (m < arr1.length) {
        result.push(arr1[m]);
        m++;
    }
    while (n < arr2.length) {
        result.push(arr2[n]);
        n++;
    }
    return result;

};

/**
 * 
 * @param {Array} arr
 * @returns {Array}
 */
const mergeSort = (arr: number[]): number[] => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
};

console.log(mergeSort([10, 24, 76, 73]));