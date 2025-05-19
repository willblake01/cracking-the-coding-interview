"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringRotation = void 0;
const utils_1 = require("@code/utils");
exports.stringRotation = (0, utils_1.memoize)((str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }
    const str1str1 = str1 + str1;
    return str1str1.includes(str2);
});
