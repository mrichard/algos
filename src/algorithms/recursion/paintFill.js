import { cloneDeep } from 'lodash';

/**
 * Create an n by n array with random colors
 * @param  {number} size Size of the array
 * @return {array}      2D array
 */
export const createArray = (size) => {
    const colors = ['red', 'green', 'blue', 'orange'];
    const result = [];

    for (let x = 0; x < size; x++) {
        result[x] = [size];

        for (let y = 0; y < size; y++) {
            result[x][y] = colors[Math.floor(Math.random() * 4)];
        }
    }

    return result;
};

/**
 * Helper function to run paintFill
 * @param  {number} n     Size of n by n array
 * @param  {object} point Object with x,y coordinates
 * @param  {string} color New color value
 * @return {array}       Modifed n by n array
 */
export const doPaintFill = (n, point, color) => {

    const inputArray = createArray(n);
    const updatedArray = cloneDeep(inputArray);

    /*eslint-disable */
    console.log('The original array is:');
    console.log(inputArray);

    console.log('The point is:');
    console.log(point);

    console.log('The color is:');
    console.log(color);
    /*eslint-enable */

    return paintFill(updatedArray, point, color);
};

/**
 * Performs paint fill recursively
 * @param  {array} input    N by N array
 * @param  {object} point    x,y coordinates
 * @param  {string} newColor new color
 * @return {array}          result of paint fill n by n array
 */
export const paintFill = (input, point, newColor) => {

    const size = input.length;

    // save current color
    const originalColor = input[point.x][point.y];

    const recurse = (row, column) => {
        // if the point is out of range, then return
        if (row < 0 || column < 0 || row >= size || column >= size) {
            return;
        }

        // set new color
        input[row][column] = newColor;

        if (row - 1 >= 0 && input[row - 1][column] === originalColor) {
            recurse(row - 1, column);
        }

        if (row + 1 < size && input[row + 1][column] === originalColor) {
            recurse(row + 1, column);
        }

        if (column - 1 >= 0 && input[row][column - 1] === originalColor) {
            recurse(row, column - 1);
        }

        if (column + 1 < size && input[row][column + 1] === originalColor) {
            recurse(row, column + 1);
        }
    };

    recurse(point.x, point.y);
    return input;
};
