/***
 * Write a recursive function called flatten which accepts an arrays and returns
 * a new array with all values flattened.
 * 
 * example:
 * flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
 * flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
 * flatten([[1],[2],[3]]) // [1,2,3]
 * flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
 */

/**
 * @param {Array} arr
 * @returns {Array}
 */
const flatten = (arr: any[]): any[] => {
    let newArr: any[] = [];
    for(let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])){
            newArr = newArr.concat(flatten(arr[i]));
        }else{
            newArr.push(arr[i]);
        }
    }
    console.log('newArr:', newArr);
    return newArr;
}
console.log(flatten([1, 2, 3, [4, 5] ]));