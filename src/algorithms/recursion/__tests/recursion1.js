import { factorial } from '../recursion1';

describe('factorial - ', () => {
    it('Should throw an error when input is not a number', () => {
        expect(() => factorial('invalid')).to.throw(/n must be a number/);
    });

    it('Should throw an error when input is less then 0', () => {
        expect(() => factorial(-1)).to.throw(/n must be greater then 0/);
    });

    it('Should return 1 with no input', () => {
        let x = factorial();
        expect(x).to.equal(1);
    });

    it('Should return 1 when input is 0', () => {
        let x = factorial(0);
        expect(x).to.equal(1);
    });

    it('Should return 1 when input is 1', () => {
        let x = factorial(1);
        expect(x).to.equal(1);
    });

    it('Should return factorial when input is valid', () => {
        let x = factorial(5);
        expect(x).to.equal(120);
    });
});
