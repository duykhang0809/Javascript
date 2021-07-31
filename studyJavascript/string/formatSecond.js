// using if...else
function formatSecondsV1(seconds) {

    if (seconds < 10) return `0${seconds}`;

    return seconds;
}
console.log(formatSecondsV1(10));


// using slice()
function formatSecondsV2(seconds) {

    return `0${seconds}`.slice(-2);
}

console.log(formatSecondsV2(5));