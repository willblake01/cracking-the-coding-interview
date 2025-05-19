"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Arrays_and_Strings_1 = require("@code/Data-Structures/Arrays-and-Strings");
test("compresses string to show integers for repeated characters", () => {
    expect((0, Arrays_and_Strings_1.stringCompression)('aabcccccaaa')).toEqual('a2b1c5a3');
});
