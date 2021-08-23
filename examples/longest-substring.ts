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

const findLongestSubstring2 = (str: string): number => {
    let longest = 0;
    let start = 0;
    let seen = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
        console.log('seen:', seen);
        console.log('i:', i);
        console.log('start:', start);
        console.log('calc:', i - start + 1);
        console.log('longest:', longest);
        console.log('----------------------');
    }
    return longest;
};
console.log(findLongestSubstring2('thecatinthehat'));
