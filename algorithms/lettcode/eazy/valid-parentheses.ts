/***
 * https://leetcode.com/problems/valid-parentheses/
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 
 * Example 1:
 * Input: s = "()"
 * Output: true
 * 
 * Example 2:
 * Input: s = "()[]{}"
 * Output: true
 * 
 * Example 3:
 * Input: s = "(]"
 * Output: false
 * 
 * Example 4:
 * Input: s = "([)]"
 * Output: false
 * 
 * Example 5:
 * Input: s = "{[]}"
 * Output: true
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s: any | string): boolean => {
    const valid = true;
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']',
    };

    for (let i in s) {
        const v = s[i];
        if (['(', '{', '['].indexOf(v) > -1) {
            stack.push(v);
        } else {
            const peak = stack.pop();
            if (v !== map[peak]) {
                return false;
            }
        }
    }
    if (stack.length > 0) return false;
    return valid;
};

console.log(isValid('()'));