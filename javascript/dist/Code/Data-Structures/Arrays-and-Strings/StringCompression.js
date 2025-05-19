"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringCompression = void 0;
const utils_1 = require("@code/utils");
exports.stringCompression = (0, utils_1.memoize)((str) => {
    let count = 1;
    const returnValue = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        }
        else {
            returnValue.push(str[i] + count);
            count = 1;
        }
    }
    return returnValue.join('');
});
