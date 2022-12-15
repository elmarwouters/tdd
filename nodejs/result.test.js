const result = require('./result');

describe('result', () => {
    it('should return 1 when it\'s 1', () => {
        expect(
            result([1])).toEqual([1]);
    });
    it('should return 2 when it\'s 2', () => {
        expect(
            result([2])).toEqual([2]);
    });
    it('should return pan when it\'s multiple 3', () => {
        expect(
            result([3, 6, 9])).toEqual(['Pan', 'Pan', 'Pan']);
    });
    it('should return pan when it\'s multiple 5', () => {
        expect(
            result([5, 10])).toEqual(['Cake', 'Cake']);
    });
    it('should return "pancake" when the amount is 15 or 30', () => {
        expect(result([15, 30])).toEqual(['PanCake', 'PanCake']);
    })
});
