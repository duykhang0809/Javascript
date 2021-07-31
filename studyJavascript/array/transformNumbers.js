// using for...i
function transformNumbersV1(numberList) {
    if (!Array.isArray(numberList)) return undefined;

    if (numberList.length === 0) return [];

    if (numberList.length === 1) {
        return [numberList[0]];
    }

    const firstNewArrayElement = numberList[1];

    const restNewArrayElement = [];

    const lastNewArrayElement = numberList[numberList.length - 2];

    for (let i = 1; i < numberList.length - 1; i++) {
        restNewArrayElement.push(numberList[i - 1] + numberList[i + 1]);
    }

    return [firstNewArrayElement, ...restNewArrayElement, lastNewArrayElement];
}

console.log(transformNumbersV1([2, 3, 4]))

console.log(transformNumbersV1([2, 3, 4, 5]))

console.log(transformNumbersV1([1]))

// using forEach()
function transformNumbersV2(numberList) {

}

// using for...of
function transformNumbersV3(numberList) {

}

// using map()
function transformNumbersV4(numberList) {

    if (!Array.isArray(numberList)) return undefined;

    if (numberList.length === 0) return [];

    if (numberList.length === 1) {
        return [numberList[0]];
    }

    const firstNewArrayElement = numberList[1];

    const restNewArrayElement = [];

    const lastNewArrayElement = numberList[numberList.length - 2];

    restNewArrayElement = numberList.reduce((previousValue, currentValue, currentIndex, array) => {

    })

    return [firstNewArrayElement, ...restNewArrayElement, lastNewArrayElement];
}

console.log(transformNumbersV4([2, 3, 4]));