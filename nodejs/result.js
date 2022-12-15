module.exports = function (numbers) {
    return numbers.map((number) => {
        let result = '';
        if (number % 3 === 0) {
            result = "Pan";
        }
        if (number % 5 === 0) {
            result += "Cake";
        }
        return result === '' ? number : result
    })
}
