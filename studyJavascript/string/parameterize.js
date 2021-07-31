function parameterize(str) {
    if (str === '') return '';
    const lowerCaseString = str.toLowerCase();

    const anotherParameterizeString = lowerCaseString.split(' ').join('-'); // Node 14

    return anotherParameterizeString;
}

console.log(parameterize('Hello Javascript Student')); // Output: hello-javascript-student