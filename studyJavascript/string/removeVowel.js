
function removeVowel(str) {

    if (str === '') return '';

    const vowelList = ['u', 'e', 'o', 'a', 'i'];

    for (let vowel of vowelList.values()) {
        str = str.split(vowel).join('');
    }


    return str.split(' ').join('');
}

console.log(removeVowel('Hello')); // Output: Hll