"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPermutation = void 0;
const utils_1 = require("@code/utils");
const utils_2 = require("@code/utils");
exports.checkPermutation = (0, utils_1.memoize)((str1, str2) => {
    const result = {
        isPermutation: true
    };
    const res1 = (0, utils_2.parseString)(str1);
    const res2 = (0, utils_2.parseString)(str2);
    for (let key in res1) {
        if (res1[key] !== res2[key]) {
            result.isPermutation = false;
        }
    }
    return result.isPermutation;
});
