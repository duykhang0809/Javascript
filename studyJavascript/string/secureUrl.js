
// using indexOf()
function isSecureUrlV1(url) {
    if (url.indexOf('https') === 0 || url.indexOf('wws') === 0) return true;
    return false;
}

console.log(isSecureUrlV1('https://example@gmail.com')); // Output: true
console.log(isSecureUrlV1('http://example@gmail.com'));  // Output: false

// using startsWith()
function isSecureUrlV2(url) {
    if (url.startsWith('https') || url.startsWith('wws')) return true;
    return false;
}

console.log(isSecureUrlV2('wss://example@gmail.com')); // Output: true
console.log(isSecureUrlV2('wws://example@gmail.com')); // Output: false