function capitalize(str) {
    if (str === '') return '';
    const firstLetter = str[0].toUpperCase();

    const rest = str.slice(1).toLowerCase();

    const result = `${firstLetter}${rest}`;

    return result;
}
console.log(capitalize('hello Javascript')); // Hello javascript