function isEqualObject(firstObject, secondObject) {

    let firstObjectToString = '';

    let secondObjectToString = '';

    for (let key in firstObject) {
        firstObjectToString = firstObjectToString.concat(key + ': ' + firstObject[key].toString() + ', ');
    }

    for (let key in secondObject) {
        secondObjectToString = secondObjectToString.concat(key + ': ' + secondObject[key].toString() + ', ');
    }

    if (firstObjectToString === '' && firstObjectToString === secondObjectToString) return true;

    return (firstObjectToString === secondObjectToString);

}

console.log(isEqualObject({}, {})); // true
console.log(isEqualObject({ id: 1 }, { id: 1, name: 'Bob' })); // false
console.log(isEqualObject({ id: 1, name: 'Bob' }, { id: 1, name: 'Alex' })); // false
console.log(isEqualObject({ id: 1, name: 'Bob' }, { id: 1, name: 'Bob' })); // true
