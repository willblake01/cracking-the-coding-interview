import stringCompression from "@code/Arrays-And-Strings/StringCompression"

test("compresses string to show integers for repeated characters", () => {
    expect(stringCompression('aabcccccaaa')).toEqual('a2b1c5a3');
});
