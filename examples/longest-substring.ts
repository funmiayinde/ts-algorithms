/***
 * Write a function called findLongestSubstring, 
 * which accepts a string and returns the length of the longest
 * substring with all distinct characters
 * 
 * Examples:
 * findLongestSubstring('') // 0
 * findLongestSubstring('rithmschool') // 7
 * findLongestSubstring('thisisawesome') // 6
 * findLongestSubstring('thecatinthehat') // 7
 * findLongestSubstring('bbbbbbb') // 1
 * findLongestSubstring('longestsubstring') // 8
 * findLongestSubstring('thisishowwedoit') // 6
 */

/***
 * @param {String} str
 * @returns {Number}
 */
const findLongestSubstring = (str: string): number => {
    let i = 0;
    let max = 0;
    let visitedChar = {};
    for (let j = 0; j < str.length; j++) {
        const nextChar = str[j];
        if (nextChar in visitedChar && visitedChar[nextChar] >= i) {
            i = visitedChar[nextChar] + 1;
            visitedChar[nextChar] = j;
        } else {
            visitedChar[nextChar] = j;
            max = Math.max(max, j + 1 - i);
        }
    }
    return max;
};
console.log(findLongestSubstring('thecatinthehat'));