function getFullName(firstName, lastName) {

    if (firstName.includes(' ')) {
        firstName = firstName.split(' ').join('');
    }
    if (lastName.includes(' ')) {
        lastName = lastName.split(' ').join('');
    }

    let firstNameFormat = '';

    let lastNameFormat = '';

    if (firstName === '' && lastName === '') {
        return '';
    } else if (firstName === '' && lastName !== '') {
        lastNameFormat = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
        return lastNameFormat;
    } else if (firstName !== '' && lastName === '') {
        firstNameFormat = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
        return firstNameFormat;
    } else {
        lastNameFormat = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
        firstNameFormat = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
        return (firstNameFormat + ' ' + lastNameFormat);
    }

}
console.log(getFullName(' kHanG ', ' Le ')); // Output: 'Khang Le'
console.log(getFullName('', ' Le ')); // Output: 'Le'
console.log(getFullName(' kHanG', '')); // Output: 'Khang'
