/**
 * Reverses a string
 * @param  {string} str String to reverse
 * @return {string}     Reversed string
 */
export const reverse = (str) => {

    if (typeof str !== 'string') {
        throw new Error('input must be a string');
    }

    if (str.length === 1) {
        return str;
    } else {
        return str.slice(str.length - 1) + reverse(str.substring(0, str.length - 1));
    }
};
