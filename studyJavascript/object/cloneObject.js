
// Without using spread operator
function cloneObject(obj) {

    const cloneObject = Object.assign({}, obj);

    return cloneObject;
}

console.log(cloneObject({ id: 1, name: 'Khang', })) // { id: 1, name: 'Khang'}