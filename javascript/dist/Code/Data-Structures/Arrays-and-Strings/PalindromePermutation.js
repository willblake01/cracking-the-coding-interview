"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const memoize_1 = require("@code/utils/memoize");
const palindromePermutation = (0, memoize_1.memoize)((str) => {
    const charCount = {};
    let oddCount = 0;
    // Normalize the string by removing spaces and converting to lowercase
    str = str.replace(/\s+/g, '').toLowerCase();
    // Count the occurrences of each character
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    // Check the number of characters with odd counts
    for (const count of Object.values(charCount)) {
        if (count % 2 !== 0) {
            oddCount++;
        }
        if (oddCount > 1) {
            return false;
        }
    }
    return true;
});
exports.default = palindromePermutation;
