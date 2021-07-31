function findSecret(code) {
    if (code === '') return '';
    let secretCode = '';
    for (let character of code) {
        if (character === character.toLowerCase()) {
            secretCode = secretCode.concat(character);
        }
    }
    return secretCode;
}
console.log(findSecret('SUPERhelloCODEworld')); // Output: helloworld
