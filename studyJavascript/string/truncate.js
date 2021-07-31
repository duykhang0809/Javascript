function truncate(text, maxLength) {

    if (text.length <= maxLength) return text;

    const firstString = text.slice(0, maxLength - 1);

    return firstString.concat('\u2026'); // UTF-16 - '\u2026': ...

}

console.log(truncate('Hello John', 6)); // Output: Hello...
