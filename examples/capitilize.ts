/**
 * Write a function that accepts a string. The function should
 * capitialize the first letter of the each word in the string then
 * return the capitized string.
 * 
 * ---Examples.
 * capitalize('a short sentence') ---> 'A Short Sentence'
 * capitalize('a lazy fox') ---> 'A Lazy Fox'
 * capitalize('look, it is working!') ---> 'Look, It Is Working!'
 * 
 */


/**
 * @param {String} str
 * @returns {String}
 */
const capitalize = (str: string): string => {
    const words: string[] = [];
    for (let word of str.split(' ')) {
        words.push(`${word[0].toUpperCase()}${word.slice(1)}`);
    }
    return words.join(' ')
};

/**
 * @param {String} str
 * @returns {String}
 */
const capitalize2 = (str: string): string => {
    let result: string = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === '') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
};

console.log(capitalize2('look, it is working!'))