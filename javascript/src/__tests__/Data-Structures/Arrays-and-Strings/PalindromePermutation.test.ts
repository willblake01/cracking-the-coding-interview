import { palindromePermutation } from "@code/Data-Structures/Arrays-and-Strings"

test("given a string, check if it is a permutation of a palindrome", () => {
    expect(palindromePermutation('Tact Coa')).toEqual(true); // Permutations: 'taco cat', 'atco cta', etc.
});
