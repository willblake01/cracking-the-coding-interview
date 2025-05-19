"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IsUnique_1 = __importDefault(require("@code/Data-Structures/Arrays-and-Strings/IsUnique"));
describe('isUnique', () => {
    it('should return true for an empty string', () => {
        expect((0, IsUnique_1.default)('')).toBe(true);
    });
    it('should return true for a string with all unique characters', () => {
        expect((0, IsUnique_1.default)('abcdef')).toBe(true);
    });
    it('should return false for a string with duplicate characters', () => {
        expect((0, IsUnique_1.default)('abcdea')).toBe(false);
    });
    it('should return false for a string with special characters', () => {
        expect((0, IsUnique_1.default)('abc!@#')).toBe(true);
    });
    it('should return false for a string with spaces', () => {
        expect((0, IsUnique_1.default)('abc def')).toBe(false);
    });
});
