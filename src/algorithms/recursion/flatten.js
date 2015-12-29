/**
 * Flattens a nested array via reduce
 * @param  {Array} input Array to flatten
 * @return {Array}       flattened array
 */
export const flatten = (input) => {

    // internal reduce function
    const doFlatten = (memo, current) => {

        // if current is not an array then append it to previous
        if (!Array.isArray(current)) {
            return memo.concat(current);
        }

        // else reduce the inner array
        return current.reduce(doFlatten, memo);
    };

    return input.reduce(doFlatten, []);
};

/**
 * Flattens a nested array
 * @param  {Array} input Array to flatten
 * @return {Array}       flattened array
 */
export const flatten2 = (input) => {

    const result = [];

    // Iterator function
    const doFlatten = (x) => {
        if (!Array.isArray(x)) {
            result.push(x);
        } else {
            x.forEach(doFlatten);
        }
    };

    doFlatten(input);

    return result;
};
