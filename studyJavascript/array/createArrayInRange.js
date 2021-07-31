function createArrayInRangeV1(a, b) {

    if (a < (-100) || b > 100 || a > b) return undefined;

    const arr = [];

    for (let i = a; i <= b; i++) {
        arr.push(i);
    }

    return arr;

}

console.log(createArrayInRangeV1(-3, 2)); // [-3, -2, -1, 0, 1, 2];

function createArrayInRangeV2(a, b) {

    if (a < (-100) || b > 100 || a > b) return undefined;

    return Array.from({ length: b - a + 1 }, (_, i) => a + i);
}

console.log(createArrayInRangeV2(-3, 2)); // [-3, -2, -1, 0, 1, 2];