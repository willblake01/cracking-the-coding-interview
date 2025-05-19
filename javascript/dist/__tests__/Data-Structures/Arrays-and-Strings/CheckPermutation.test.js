"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Arrays_and_Strings_1 = require("@code/Data-Structures/Arrays-and-Strings");
test("given two strings, decide if one is a permutation of the other", () => {
    expect((0, Arrays_and_Strings_1.checkPermutation)('hello', 'olleh')).toEqual(true);
});
