import { paintFill, createArray } from '../paintFill';

describe('createArray - ', () => {
    it('Should create an n by n array', () => {
        const result = createArray(5);
        expect(result.length).to.equal(5);
        expect(result[0].length).to.equal(5);
    });
});

describe('paintfill - ', () => {
    it('Should return an array with modified colors', () => {
        const data = [3];
        data[0] = [3];
        data[1] = [3];
        data[2] = [3];
        data[0][0] = data[0][1] = data[0][2] = data[1][0] = data[1][1] =
        data[1][2] = data[2][0] = data[2][1] = data[2][2] = 'red';

        const output = [3];
        output[0] = [3];
        output[1] = [3];
        output[2] = [3];
        output[0][0] = output[0][1] = output[0][2] = output[1][0] = output[1][1] =
        output[1][2] = output[2][0] = output[2][1] = output[2][2] = 'black';

        const result = paintFill(data, { x: 1, y: 1 }, 'black');
        expect(result).to.deep.equal(output);
    });
});
