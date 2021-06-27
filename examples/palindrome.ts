// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

const palindrome = (str: string): boolean => {
  const reversed = str.split("").reduce((accum, item) => `${item}${accum}`, "");

  return reversed === str;
};

const palindrome2 = (str: string): boolean => {
  return str.split("").every((char, index) => {
    return char == str[str.length - index - 1];
  });
};
