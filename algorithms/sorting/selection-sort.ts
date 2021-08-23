/***
 *
 * @param {Array} arr
 * @return {Array}
 */
const selectionSort = (arr: any[]): any[] => {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
            if (i !== lowest) {
                let temp = arr[i];
                arr[i] = arr[lowest];
                arr[lowest] = temp;
            }
        }
    }
    return arr;
};

const selectionSort2 = (array: number[]): number[] => {
    const swap = (arr: number[], idx1: number, idx2: number) => {
        const temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    };
    let startIndex = 0;
    while (startIndex < array.length - 1) {
        let smallestIdx = startIndex;
        for (let i = startIndex + 1; i < array.length; i++){
            if (array[smallestIdx] > array[i]) smallestIdx = i;
        }
        // now swap the smallest with startIdx
        swap(array, startIndex, smallestIdx);
        startIndex++;
    }
    return array;
}

console.log(selectionSort2([3, 1, 2]))
