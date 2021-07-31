function isValidEmailType(str) {
    return str.includes('@gmail.com');
}

console.log(isValidEmailType('example@gmail.com')); // true

console.log(isValidEmailType('example.com')); // false