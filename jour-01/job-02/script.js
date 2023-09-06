function myCountChar(haystack, needle) {
    let count = 0;
    for (const char of haystack) {
        if (char === needle) {
            count++;
        }
    } return count;
}
myCountChar("Hello World", "o");