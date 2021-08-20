/**
 * Write a recursive function to reverse a string
 */
const reverse = (str: string): string => {
    if (str.length <= 1) return str;
    console.log('str:', str);
    return reverse(str.slice(1)) + str[0];
}
console.log(reverse('Hello World!'));
