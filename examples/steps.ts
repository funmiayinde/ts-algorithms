/**
 * Write a function that accepts a positive number N.
 * The function should console log a step shap.
 * with N levels using the # character. Make sure the
 * step has spacs on the right hand side!
 * 
 * ---Examples
 *  steps(2)
 *       '# '
 *       '##'
 * *  steps(3)
 *       '# '
 *       '## '
 *       '###'
 * *  steps(4)
 *       '# '
 *       '## '
 *       '### '
 *       '####'
 */

/**
 * @param {Number} n
 */
const steps = (n: number, row = 0, step = ''): void => {
    if (n === row) {
        return;
    }

    if (n === step.length) {
        console.log(step);
        return steps(n, row + 1);
    }

    const add: string = step.length <= row ? '#' : ' ';
    steps(n, row, step + add);
};
console.log(steps(4));