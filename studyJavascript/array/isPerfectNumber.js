
function isPerfectNumber(number) {
    if (number < 1 || number > 1000) return false;

    return (number === Array.from({ length: number - 1 }, (_, i) => i + 1).filter(i => number % i === 0).reduce((sum, i) => sum + i));
}

console.log(isPerfectNumber(6)); // true