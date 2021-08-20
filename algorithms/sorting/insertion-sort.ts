/**
 * @param {Array} arr
 * @returns {Array}
 */
const insertionSort = (arr: number[]): number[] => {
    for (let i = 1; i < arr.length; i++) {
        let currentVal: number = arr[i];
        let j = i - 1;
        for (; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    return arr;
};

console.log(insertionSort([2, 19, 9, 76, 4]));
