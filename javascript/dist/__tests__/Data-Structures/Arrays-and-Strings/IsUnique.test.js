"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Arrays_and_Strings_1 = require("@code/Data-Structures/Arrays-and-Strings");
describe('isUnique', () => {
    it('should return true for an empty string', () => {
        expect((0, Arrays_and_Strings_1.isUnique)('')).toBe(true);
    });
    it('should return true for a string with all unique characters', () => {
        expect((0, Arrays_and_Strings_1.isUnique)('abcdef')).toBe(true);
    });
    it('should return false for a string with duplicate characters', () => {
        expect((0, Arrays_and_Strings_1.isUnique)('abcdea')).toBe(false);
    });
    it('should return false for a string with special characters', () => {
        expect((0, Arrays_and_Strings_1.isUnique)('abc!@#')).toBe(true);
    });
    it('should return false for a string with spaces', () => {
        expect((0, Arrays_and_Strings_1.isUnique)('abc def')).toBe(false);
    });
});
