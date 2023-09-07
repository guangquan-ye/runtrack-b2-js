function myIsInString(haystack, needle) {
    let haystackIndex = 0;
    let needleIndex = 0;

    while (haystack[haystackIndex] !== undefined) {
        if (haystack[haystackIndex] === needle[needleIndex]) {
            needleIndex++;
            if (needle[needleIndex] === undefined) {
                return true;
            }
        } else {
            needleIndex = 0;
        }
        haystackIndex++;
    }
    return false;
}

myIsInString("Hello World", "llo");


