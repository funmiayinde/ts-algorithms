/**
 * Given a circularly sorted integer array, find the total number of times the array is rotated.
 * Assume there are no duplicates in the array, and the rotation is in the anti-clockwise direction.
 *
 * Input:  arr = [8, 9, 10, 2, 5, 6]
 * Output: The array is rotated 3 times
 *
 * Input:  arr = [2, 5, 6, 8, 9, 10]
 *
 * Output: The array is rotated 0 times
 *
 * */

/**
 * @param {Array} arr
 * @return {Number}
 */
const findRotationCount = (arr: number[]): number => {
    let left = 0;
    let right = arr.length - 1;

    // loop till the search space is exhausted
    while (left <= right) {
        // if the search space is already sorted, we have
        // found the minimum element (at index `left`)
        if (arr[left] <= arr[right]) {
            return left;
        }
        let mid = Math.floor((left + right) / 2);

        // find the next and previous element of the `mid` element(in a circular way)
        let next = (mid + 1) % arr.length;
        let prev = (mid - 1 + arr.length) % arr.length;

        // if the `mid` element is less than both it's next and previous neighbor
        // it is the array's minimum element
        if (arr[mid] < arr[next] && arr[mid] <= arr[prev]) {
            return mid;
        }
        // if `arr[mid...right]` is sorted, and `mid` is not the minimum element,
        // then the pivot element cannot be present in `arr[mid...right]`,
        // discard `arr[mid...right]` and search in the left half
        else if (arr[mid] >= arr[left]) {
            left = mid + 1;
        }
    }
    return  -1;
};
console.log(findRotationCount([2, 5, 6, 8, 9, 10]));
