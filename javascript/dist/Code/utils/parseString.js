"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseString = void 0;
const parseString = (str) => {
    const result = {};
    for (let i = 0; i < str.length; i++) {
        if (result[str[i]] === undefined) {
            result[str[i]] = 1;
        }
        else {
            result[str[i]]++;
        }
    }
    return result;
};
exports.parseString = parseString;
