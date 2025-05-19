"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const memoize_1 = require("@code/utils/memoize");
const isUnique = (0, memoize_1.memoize)((str) => {
    const result = {
        hasUniqueChars: true
    };
    for (let i = 0; i < str.length; i++) {
        // Return false if the character is a space
        if (str[i] === ' ') {
            result.hasUniqueChars = false;
        }
        if (result[str[i]] === undefined) {
            result[str[i]] = 1;
        }
        else {
            result[str[i]] = result[str[i]]++;
            result.hasUniqueChars = false;
        }
    }
    return result.hasUniqueChars;
});
exports.default = isUnique;
