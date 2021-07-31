// using for...i to loop from 1 to n
function getDivisorListV1(number) {

    if (number < 1 || number > 1000) return undefined;

    const divisorArray = [];

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) divisorArray.push(i);
    }

    return divisorArray;
}
console.log(getDivisorListV1(15)); // [1, 3, 5, 15]

// using Array.from() and filter() to loop from 1 to n
function getDivisorListV2(number) {

    if (number < 1 || number > 1000) return undefined;

    return Array.from({ length: number }, (_, i) => i + 1).filter(divisorNumber => number % divisorNumber === 0);
}
console.log(getDivisorListV2(28)); // [1, 2, 4, 7, 14, 28]

