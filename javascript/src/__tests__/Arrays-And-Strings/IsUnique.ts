import isUnique from '../../DataStructures/Arrays-And-Strings/IsUnique';

describe('isUnique', () => {
    it('should return true for an empty string', () => {
        expect(isUnique('')).toBe(true);
    });

    it('should return true for a string with all unique characters', () => {
        expect(isUnique('abcdef')).toBe(true);
    });

    it('should return false for a string with duplicate characters', () => {
        expect(isUnique('abcdea')).toBe(false);
    });

    it('should return false for a string with special characters', () => {
        expect(isUnique('abc!@#')).toBe(true);
    });

    it('should return false for a string with spaces', () => {
        expect(isUnique('abc def')).toBe(false);
    });
});
