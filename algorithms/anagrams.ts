/**
 * Given two strings, write a function to determine if the
 * second string is anagram of the first. An anagrams is
 * a word, phase, or nam formed by rearranging the letters
 * of another, such as cinema, formed from iceman.
 *
 * Example:
 *
 * validateAnagrams('', '');  // true
 * validateAnagrams('aaz', 'zza');  // false
 * validateAnagrams('rat', 'car');  // false
 * validateAnagrams('qwerty', 'qeywrt');  // true
 */

/**
 * @param {String} str1
 * @param {String} str2
 */
const validAnagrams = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) {
    return false;
  }
  let lookup = {};
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
