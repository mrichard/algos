import { gcd } from '../greatestCommonDivisor';

describe('gcd - ', () => {
    it('Should throw an error when number 1 is not a number', () => {
        expect(() => gcd('test1', 5)).to.throw(/parameters must be positive numbers/);
    });

    it('Should throw an error when number 2 is not a number', () => {
        expect(() => gcd(1, 'test2')).to.throw(/parameters must be positive numbers/);
    });

    it('Should throw an error when number 1 or number 2 are less then 1', () => {
        expect(() => gcd(-1, -1)).to.throw(/parameters must be positive numbers/);
    });

    it('Should return the greatest common divisor', () => {
        const result = gcd(48, 18);
        expect(result).to.equal(6);
    });
});
