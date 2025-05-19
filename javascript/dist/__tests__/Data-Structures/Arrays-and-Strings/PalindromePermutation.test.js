"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Arrays_and_Strings_1 = require("@code/Data-Structures/Arrays-and-Strings");
test("given a string, check if it is a permutation of a palindrome", () => {
    expect((0, Arrays_and_Strings_1.palindromePermutation)('Tact Coa')).toEqual(true); // Permutations: 'taco cat', 'atco cta', etc.
});
