/***
 * N.B: 
 * worst case(O(N ^2))
 * best case(O(N))
 * 
 * @param {Array} arr
 * @returns {Array}
 */
const bubbleSort = (arr: any[]): any[] => {
    const swap = (arr: any[], idx1: number, idx2: number) => {
        const temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2]= temp;
        return arr;
    }
    let noSwap: boolean = false;
    for (let i = arr.length; i > 0; i--){
        noSwap = true;
        for (let j = 0; j < i - 1; j++){
            if (arr[j] > arr[j + 1]){
                swap(arr, j, j + 1);
                noSwap = false;
            }
        }
        if (noSwap) break;
    }
    return arr;
};
console.log(bubbleSort([90,100,10,12,16,30]));