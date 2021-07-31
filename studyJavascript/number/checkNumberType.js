
function isEven(number) {
    return (number % 2 === 0)
}
console.log(isEven(5)) // False


function isPerfectSquare(number) {
    if (number <= 0) return false;
    const sqrtNumber = Math.sqrt(number);
    const sqrtIntegerNumber = Math.trunc(sqrtNumber);
    return (sqrtIntegerNumber * sqrtIntegerNumber === number);
}
console.log(isPerfectSquare(25)) // True
console.log(isPerfectSquare(28)) // False
