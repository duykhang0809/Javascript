// Using loop from 2 to n - 1
function isPrimeV1(n) {

    if (n <= 1 || n > 1000) return false;

    if (n === 2) return true;

    const divisorArray = [1, n];

    for (let i = 3; i < n - 1; i++) {
        if (n % i === 0) {
            divisorArray.push(i);
        }
    }

    if (divisorArray.length > 2) return false;

    return true;
}
console.log(isPrimeV1(7)); // true
console.log(isPrimeV1(9)); // false


// Using loop from 2 to square root of n
function isPrimeV2(n) {

    if (n <= 1 || n > 1000 || n === 4) return false;

    if (n === 3) return true;

    const divisorArray = [1, n];

    for (let i = 2; i <= Math.trunc(Math.sqrt(n)); i++) {

        if (n % i === 0 || n % (i * i) === 0) {
            divisorArray.push(i);
        }
    }

    if (divisorArray.length > 2) return false;

    return true;
}
console.log(isPrimeV2(7)); // true
console.log(isPrimeV2(9)); // false