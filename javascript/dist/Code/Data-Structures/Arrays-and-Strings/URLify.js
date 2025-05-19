"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const memoize_1 = require("@code/utils/memoize");
const URLify = (0, memoize_1.memoize)((str, len) => {
    return str.slice(0, len).split(' ').join('%20');
});
exports.default = URLify;
