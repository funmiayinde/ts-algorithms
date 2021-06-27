// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = (str: string) => {
  const chars = {};
  let maxChar = 0;
  let result = "";

  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }

  for (let key in chars) {
    if (chars[key] > maxChar) {
      maxChar = chars[key];
      result = key;
    }
  }
  return result;
};
