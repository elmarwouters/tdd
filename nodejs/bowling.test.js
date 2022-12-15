const bowling = require('./bowling');

const noScore = (attempts) => {
    return Array(attempts).fill(0,0,attempts)
}
describe('bowling', () => {
    // it('should return 0 not scored', () => {
    //     expect(bowling(noScore(20))).toEqual(0);
    // });
    // it('should return 1 when one pin is knocked over', () => {
    //     expect(bowling([1].concat(noScore(19)))).toEqual(1);
    // });
    // it('should return 2 when one pin is knocked over', () => {
    //     expect(bowling([1,1].concat(noScore(18)))).toEqual(2);
    // });
    it('should return spare when one spare is thrown over', () => {
        expect(bowling([4,6,1])).toEqual(12);
    });
    // it('should return 2 spares when one spare is thrown over', () => {
    //     expect(bowling([4,6,1,9,1].concat(noScore(18)))).toEqual(23);
    // });
    // it('should return 2 spares when one spare is thrown over', () => {
    //     expect(bowling([10,1,1,0].concat(noScore(18)))).toEqual(14);
    // });
    // it('should return 2 spares when one spare is thrown over', () => {
    //     expect(bowling([0,10,1,1,0].concat(noScore(18)))).toEqual(13);
    // });
});
