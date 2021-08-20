/**
 * Write a recursive function that checks whether a string is a palindrome (a palindrome is
 a string that's the same when reads forwards and backwards.)
 * */

/**
 * @param {String} str
 * @return {Boolean}
 * */
const isPalindrome = (str: string): boolean => {
    const reverse = (str): string => {
        if (str.length <= 1) return str;
        return reverse(str.slice(1)) + str[0];
    }
    return str === reverse(str);
};

console.log(isPalindrome('abba'));
