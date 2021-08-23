/**
 * Write a recursive function that, given two strings, returns whether the first string is a
 * subsequence of the second.
 *
 * For example, given hac and cathartic, you should return true,
 * but given bat and table, you should return false.
 *
 * isSubsequence("hac", "cathartic") // true
 * isSubsequence("bat", "table") // false
 * */
/**
 * @
 * */
const isSubsequence = (str1: string, str2: string, m: number, n: number): boolean => {
    if (m === 0)
        return true;
    if (n === 0)
        return false;

    // if last char of two strings are matching
    if (str1[m - 1] === str2[n - 1]) {
        return isSubsequence(str1, str2, m - 1, n - 1);
    }
    return isSubsequence(str1, str2, m, n - 1);
}
const str1 = 'hac';
const str2 = 'cathartic';
const m = str1.length;
const n = str2.length;
console.log(isSubsequence('hac', 'cathartic', m, n));
