// using split
function extractDomainV1(email) {
    if (email === '') return '';
    return email.split('@')[1];
}
console.log(extractDomainV1('example@gmail.com')); // Output: gmail.com

// using indexOf() and slice()
function extractDomainV2(email) {
    // your code here
    if (email === '') return '';
    return email.slice(email.indexOf('@') + 1);
}

console.log(extractDomainV2('example@yahoo.com')); // Output: yahoo.com