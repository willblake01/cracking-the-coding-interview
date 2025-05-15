import checkPermutation from "@code/Data-Structures/Arrays-and-Strings/CheckPermutation"

test("given two strings, decide if one is a permutation of the other", () => {
    expect(checkPermutation('hello', 'olleh')).toEqual(true);
});
