"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Arrays_and_Strings_1 = require("@code/Data-Structures/Arrays-and-Strings");
test("given two strings, str1 and str2, check if str2 is a rotation of str1 using only one call to isSubstring()", () => {
    expect((0, Arrays_and_Strings_1.stringRotation)('erbottlewat', 'waterbottle')).toEqual(true);
});
