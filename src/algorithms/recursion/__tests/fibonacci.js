import { fibonacci } from '../fibonacci';

describe('fibonacci - ', () => {
    it('Should throw an error when the input is not a number', () => {
        expect(() => fibonacci('test')).to.throw(/n must be a number/);
    });

    it('Should throw an error wehn the input is less then 0', () => {
        expect(() => fibonacci(-1)).to.throw(/n must be greater then 0/);
    });

    it('Should return the nth fibonacci number', () => {
        const result = fibonacci(7);
        expect(result).to.equal(13);
    });
});
