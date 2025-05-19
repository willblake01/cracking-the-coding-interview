"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PalindromePermutation_1 = __importDefault(require("@code/Data-Structures/Arrays-and-Strings/PalindromePermutation"));
test("given a string, check if it is a permutation of a palindrome", () => {
    expect((0, PalindromePermutation_1.default)('Tact Coa')).toEqual(true); // Permutations: 'taco cat', 'atco cta', etc.
});
