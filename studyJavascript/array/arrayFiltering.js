function filter(arr, filterFunction) {

    if (!Array.isArray(arr) || typeof filterFunction !== 'function') return undefined;

    const newArray = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (filterFunction(element, i)) {
            newArray.push(element);
        }

    }

    return newArray;
}

console.log(filter([1, 5, 10], x => x % 5 === 0)) // [5, 10]

console.log(filter(['Hello Alex', 'Hello Bob', 'Bye Bob'], x => x.startsWith('Hello'))) // ['Hello Alex', 'Hello Bob']