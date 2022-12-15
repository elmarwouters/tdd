module.exports = function(christmassBallthrows) {
    let moduloChecker = 0
    let isFirstThrown = true;
    let strike = 0;
    let spare = false;
    console.log(christmassBallthrows);
    return christmassBallthrows.reduce(
        (score, pin, index) => {
            if (strike >= 1) {
                score += pin;
                console.log(`strike${score}`)
                if(strike === 2) {
                    strike = 0;
                }
                strike++;
            }
            if (spare) {
                score += pin;
                spare = false;
            }

            // strike
            if(isFirstThrown && pin === 10) {
                strike = 1;
                isFirstThrown = true;
                return score + pin;
            }
            //spare
            if(isFirstThrown === false && (pin + christmassBallthrows[index-1] >= 10) ) {
                spare = true;
            }
            isFirstThrown = !isFirstThrown;
            return score + pin;
        }
    );
}
