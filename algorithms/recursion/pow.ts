/**
 * Write a function called power which accepts a base and an exponent.
 * The function should return the power of the base to the exponent.
 * The function should mimic the functionality of
 * Math.pow() -- do not worry about the negative bases and exponents.
 *
 * Example:
 * power(2, 0) // 1
 * power(2, 2) // 4
 * power(2, 6) // 16
 ***/

/**
 * @param {Number} base
 * @param {Number} exponent
 * @return {Number}
 * */
const pow = (base: number, exponent: number): number => {
    if (exponent === 0) return 1;
    return base * pow(base, exponent - 1);
};

console.log(pow(2, 6));
