export const fibonacci = (n) => {

    // If n is not a number then throw an error
    if (typeof n !== 'number') {
        throw new Error('n must be a number');
    }

    // If n is less then 0. then throw an error
    if (n < 0) {
        throw new Error('n must be greater then 0');
    }

    // Base case
    if (n === 0 || n === 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
};
