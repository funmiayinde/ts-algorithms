/***
 * 
 * Write a recursive function called capitalizeFirstWord.Given an arry of strings,
 * capitialize the first letter of each string in the array.
 * 
 * Example: 
 * 
 * capitalizeFirst(['car','taco','banana']) // ['Car','Taco','Banana'])
 */

/**
 * 
 * @param {Array} arr 
 * @returns {Array}
 */
const capitalizeFirstWord = (arr: string[]): string[] => {
    if (arr.length === 1){
        return [arr[0].toUpperCase()];
    }    
    let res = capitalizeFirstWord(arr.slice(0, -1));
    res.push(arr.slice(arr.length - 1)[0].toUpperCase());
    return res;
};


console.log(capitalizeFirstWord(['car', 'taco', 'banana']));
// ['Car','Taco','Banana'])