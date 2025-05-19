"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLify = void 0;
const utils_1 = require("@code/utils");
exports.URLify = (0, utils_1.memoize)((str, len) => {
    return str.slice(0, len).split(' ').join('%20');
});
