/**
 * Write a function that returns the number of vowels
 * used in a string
 *
 * Examples
 *  vowels('Hi There!') ---> 3
 *  vowels('Why do you ask?') ---> 4
 *  vowels('Why?') ---> 0
 * */

/**
 * @param {String} str
 * @return {Number}
 * */
const vowels = (str: string): number => {
    let counter = 0;
    const vowelLetters = ['a', 'e', 'i', 'o', 'u'];
    for (let s of str.toLowerCase()) {
        if (vowelLetters.includes(s.toLowerCase())) {
            counter++;
        }
    }
    return counter;
};

/**
 * @param {String} str
 * @return {Number}
 * */
const vowels2 = (str: string): number => {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
};

console.log('vowels:', vowels2('Hi There!'));
