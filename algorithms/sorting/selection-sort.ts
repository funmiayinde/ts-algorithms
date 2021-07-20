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

console.log(selectionSort([0, 20, 100, 10, 50, 30, 5, 2, 4]))