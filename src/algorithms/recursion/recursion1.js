/**
 * Factorial of number n
 * @param  {Number} n argument for factorial
 * @return {Number}   factorial
 */
export const factorial = (n = 0) => {

    if (typeof n !== 'number') {
        throw new Error('n must be a number');
    }

    // If n is less then 0 then throw an error
    if (n < 0) {
        throw new Error('n must be greater then 0');
    }

    // Base case, when n is 0 or 1, then return 1
    return (n === 0 || n === 1) ? 1 : n * factorial(n - 1);
};
