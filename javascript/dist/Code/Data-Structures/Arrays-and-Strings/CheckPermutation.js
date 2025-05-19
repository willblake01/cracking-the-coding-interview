"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const memoize_1 = require("@code/utils/memoize");
const parseString_1 = require("@code/utils/parseString");
const checkPermutation = (0, memoize_1.memoize)((str1, str2) => {
    const result = {
        isPermutation: true
    };
    const res1 = (0, parseString_1.parseString)(str1);
    const res2 = (0, parseString_1.parseString)(str2);
    for (let key in res1) {
        if (res1[key] !== res2[key]) {
            result.isPermutation = false;
        }
    }
    return result.isPermutation;
});
exports.default = checkPermutation;
