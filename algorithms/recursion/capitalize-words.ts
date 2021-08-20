/**
 * Write a recursive function called capitalizeWords. Given an array of
 * words, return a new array containing each words capitalized
 *
 */

/***
 * @param {String} str
 * @returns {String}
 */
const capitalizedWords = (str: string[]) => {
    if (str.length === 1) {
        return [str[0].toUpperCase()];
    }
    let res = capitalizedWords(str.slice(0, -1));
    res.push(str.slice(str.length - 1)[0].toUpperCase());
    return res;
};

console.log(capitalizedWords(['i', 'am', 'learning', 'recursion']));
