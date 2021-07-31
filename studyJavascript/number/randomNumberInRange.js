function randomNumberInRange(a, b) {
    if (a >= b) return -1;
    const random = Math.random() * (b - a);
    return Math.round(random) + a;
}

console.log(randomNumberInRange(10, 100)) // Output: Random number from 10 to 100