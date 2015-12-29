import { flatten, flatten2 } from '../flatten';

describe('flatten - ', () => {
    it('Should flatten a nested array', () => {
        const result = flatten([1, [2], [3, [[4]]]]);
        expect(result).to.deep.equal([1, 2, 3, 4]);
    });
});

describe('flatten2 - ', () => {
    it('Should flatten a nested array', () => {
        const result = flatten2([1, [2], [{ a: 3 }, [[4]]]]);
        expect(result).to.deep.equal([1, 2, { a: 3 }, 4]);
    });
});
