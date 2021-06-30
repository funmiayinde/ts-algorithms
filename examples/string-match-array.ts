/**
 * Given an array of string words. Return all strings in words which is substring of another word in any order. 
 * String words[i] is substring of words[j], 
 * if can be obtained removing some characters to left and/or right side of words[j] 
 * 
 *  Example 1:
 *  Input: words = ["mass","as","hero","superhero"]
 *  Output: ["as","hero"]
 *  Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
 *  ["hero","as"] is also a valid answer.
 * 
 *  Example 2:
 *  Input: words = ["leetcode","et","code"]
 *  Output: ["et","code"]
 *  Explanation: "et", "code" are substring of "leetcode".
 * 
 * Example 3:
 * Input: words = ["blue","green","bu"]
 * Output: []
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
const stringMatching = (words: string[]): string[] => {
    const result = [];
    for (let word of words) {
        if (words.filter(w => w.includes(word)).length > 1) {
            result.push(word);
        }
    }
    return result;
};

console.log(stringMatching(["mass", "as", "hero", "superhero"]));