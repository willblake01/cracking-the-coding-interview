"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const memoize_1 = require("@code/utils/memoize");
const insertChar = (str1, str2) => {
    for (let i = 0; i < str1.length; i++) {
        if (str2.slice(0, i) + str1[i] + str2.slice(i) === str1) {
            return true;
        }
    }
    return false;
};
const removeChar = (str1, str2) => {
    for (let i = 0; i < str1.length; i++) {
        if (str1.slice(0, i) === str2) {
            return true;
        }
    }
    return false;
};
const replaceChar = (str1, str2) => {
    for (let i = 0; i < str1.length; i++) {
        if (str2.replace(str2[i], str1[i]) === str1) {
            return true;
        }
    }
    return false;
};
const oneAway = (0, memoize_1.memoize)((str1, str2) => {
    let isOneEditAway = false;
    if (insertChar(str1, str2) || removeChar(str1, str2) || replaceChar(str1, str2)) {
        isOneEditAway = true;
    }
    return isOneEditAway;
});
exports.default = oneAway;
