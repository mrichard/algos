/**
 * Returns the greatest common divisor of 2 numbers
 * @param  {Number} num1
 * @param  {Number} num2
 * @return {Number}      Greatest common divisor
 */
export const gcd = (num1, num2) => {

    if (typeof num1 !== 'number') {
        throw new Error('parameters must be positive numbers');
    }

    if (typeof num2 !== 'number') {
        throw new Error('parameters must be positive numbers');
    }

    if (num1 < 1 || num2 < 1) {
        throw new Error('parameters must be positive numbers');
    }

    if (num1 === num2) {
        return num1;
    }

    if (num1 > num2) {
        return gcd(num1 - num2, num2);
    } else {
        return gcd(num1, num2 - num1);
    }
};
