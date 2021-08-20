/**
 * Write a recursive function called nestedEvenSum. 
 * Return the sum of all even numbers in an object which 
 * may contain nested objects
 * 
 */
const nestedEvenSum = (obj: any, sum: any | number = 0): number => {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            sum += nestedEvenSum(obj[key]);
        }else if (typeof obj[key] === 'number' && obj[key]){
            sum += obj[key];
        }
    }
    return sum;
};