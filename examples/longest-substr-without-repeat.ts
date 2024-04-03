/***
 * Given a string s, find the length of the longest substring without repeating characters.
 *  Example 1:
 *  Input: s = "abcabcbb"
 *  Output: 3
 *  Explanation: The answer is "abc", with the length of 3.
 *
 * Example 2:
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 * Example 3:
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * @param {String} str
 * */
const longestSubStringWithoutRepeat = (str: string): number => {
    let i: number = 0;
    let max: number = 0;
    let visitedChar = {};
    for (let j = 0; j < str.length; j++) {
        let nextChar = str[j];
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



console.log(longestSubStringWithoutRepeat('bbbb'));
