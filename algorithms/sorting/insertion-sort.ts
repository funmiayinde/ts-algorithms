/**
 * @param {Array} arr
 * @returns {Array}
 */
const insertionSort = (arr: number[]): number[] => {
    for (let i = 1; i < arr.length; i++) {
        console.log('i:', i);
        let currentVal: number = arr[i];
        let j = i - 1;
        console.log('currentVal:', currentVal);
        console.log('j:', j);
        for (; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
        console.log('arr:', arr);
        console.log('----------');
    }
    return arr;
};

console.log(insertionSort([2, 19, 9, 76, 4]));