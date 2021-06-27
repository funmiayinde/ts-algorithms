/**
 * Implement the function unique_in_order which takes as argument a sequence and    returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
 *
 * For example:
 * uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
 * uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
 * uniqueInOrder([1,2,2,3,3])       == [1,2,3]
 */

/**
 * @param {String | Array} arr The value iteration will be done
 */
const uniqueInOrder = (arr: any[] | string) => {
    //your code here - remember iterable can be a string or an array
    const result: any[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            result.push(arr[i]);
        }
    }
    return result;
};

export default uniqueInOrder;

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
