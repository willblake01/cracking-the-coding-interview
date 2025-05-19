import { stringCompression } from "@code/Data-Structures/Arrays-and-Strings"

test("compresses string to show integers for repeated characters", () => {
    expect(stringCompression('aabcccccaaa')).toEqual('a2b1c5a3');
});
