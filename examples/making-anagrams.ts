/**
 * Given two strings,  and , that may not be of the same length, 
 * determine the minimum number of character deletions required to make  and  anagrams. 
 * Any characters can be deleted from either of the strings.
 * 
 * Example.
 * makingAnagrams('cde', 'abc'); // 4
 * 
 * Explanation
 * Delete the following characters from our two strings to turn them into anagrams:
 * Remove d and e from cde to get c.
 * Remove a and b from abc to get c.
 * characters have to be deleted to make both strings anagrams.
 * 
 * The only characters that match are the 's so we have to remove  from  and  from  for a total of  deletions.
 * 
 * Function Description
 * 
 * Complete the makingAnagrams function in the editor below.
 * makingAnagrams has the following parameter(s):
 */

 /**
 * Complete the 'makingAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 * @param {String} s1
 * @param {String} s2
 * @returns {Number}
 **/

const makingAnagrams = (s1: string, s2: string): number => {
    let count: number = 0;
    let lookup: any = {};
    for (let i = 0; i < s1.length; i++){
        let letter = s1[i];
        lookup[letter] = ((lookup[letter]|| 0)) + 1;
    }
    for (let i = 0; i < s2.length; i++){
        let letter = s2[i];
        lookup[letter] = ((lookup[letter]|| 0)) - 1;
    }
    for (let key in lookup){
        if(lookup.hasOwnProperty(key)) {
            count += Math.abs(lookup[key]);
        }
    }
    return count;
};

console.log(makingAnagrams('absdjkvuahdakejfnfauhdsaavasdlkj', 'djfladfhiawasdkjvalskufhafablsdkashlahdfa'));