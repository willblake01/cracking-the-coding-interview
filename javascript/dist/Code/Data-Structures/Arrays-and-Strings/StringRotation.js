"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const memoize_1 = require("@code/utils/memoize");
const stringRotation = (0, memoize_1.memoize)((str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }
    const str1str1 = str1 + str1;
    return str1str1.includes(str2);
});
exports.default = stringRotation;
