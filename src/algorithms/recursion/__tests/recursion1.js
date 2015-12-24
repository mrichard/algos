import { factorial } from '../recursion1';

describe('factorial - ', () => {
    it('Should throw an error when input is not a number', () => {
        expect(() => factorial('invalid')).to.throw(/n must be a number/);
    });

    it('Should throw an error when input is less then 0', () => {
        expect(() => factorial(-1)).to.throw(/n must be greater then 0/);
    });

    it('Should return 1 with no input', () => {
        const result = factorial();
        expect(result).to.equal(1);
    });

    it('Should return 1 when input is 0', () => {
        const result = factorial(0);
        expect(result).to.equal(1);
    });

    it('Should return 1 when input is 1', () => {
        const result = factorial(1);
        expect(result).to.equal(1);
    });

    it('Should return factorial when input is valid', () => {
        const result = factorial(5);
        expect(result).to.equal(120);
    });
});
