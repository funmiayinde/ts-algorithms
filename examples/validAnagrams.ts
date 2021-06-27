/**
 * Given two strings, write a function to determine if the second string is an anagram of   * the first. An anagram is a word, phrase, or name formed by rearranging the
 * letters of another, such as cinema, formed from iceman.
 * Examples:
 * validAnagrams('', '') // true
 * validAnagrams('aaz', 'zza') // false
 * validAnagrams('anagram', 'nagaram') //true
 * validAnagrams('rat', 'car') // false
 * validAnagrams('awesome', 'awesom') //false
 */

/**
 * @params {String} str1 The first string
 * @params {String} str2 The second string
 * @return strubg
 */
const validAnagrams = (str1: string, str2: string): any | string => {
  if (str1.length !== str2.length) return false;

  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    const letter = str1[i];
    lookup[letter] ? lookup[letter]++ : (lookup[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    const letter = str2[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
};

export default validAnagrams;
