function map(arr, mappingFunction) {

    if (!Array.isArray(arr) || typeof mappingFunction !== 'function') return undefined;

    const newArray = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const newElement = mappingFunction(element, i);
        newArray.push(newElement);
    }

    return newArray;
}

console.log(map([1, 2, 3], x => x + 1)) // [2, 3, 4]

console.log(map([1, 2, 3], x => x * 2)) // [2, 4, 6]