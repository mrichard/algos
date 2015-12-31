import { reverse } from '../reverse';

describe('reverse - ', () => {
    it('Should throw an error when input is not a string', () => {
        expect(() => reverse(123)).to.throw(/input must be a string/);
    });

    it('Should return the input with stirng of length 1', () => {
        const result = reverse('a');
        expect(result).to.equal('a');
    });

    it('Should reverse a string', () => {
        const result = reverse('qwerty');
        expect(result).to.equal('ytrewq');
    });
});
