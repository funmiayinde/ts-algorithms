/**
 * @param {Array} arr
 * @param {Number} start
 * @param {Number} end
 * @returns {Number}
 */
const pivot = (arr: number[], start: number = 0, end: number = arr.length - 1): number => {
    const swap = (arr: number[], i: number, j: number) => {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    };
    let pivot = arr[start];
    let swapIdx = start;
    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

/**
 * @param {Array} arr
 * @param {Number} left
 * @param {Number} right
 * @returns {Number}
 */
const quickSort = (arr: number[], left: number = 0, right: number = arr.length - 1): number[] => {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        // left side
        quickSort(arr, left, pivotIndex - 1);

        //right side
        quickSort(arr, pivotIndex + 1, right);

    }
    return arr;
}
console.log(quickSort([4, 8, 1, 2, 5, 6, 7, 3]));