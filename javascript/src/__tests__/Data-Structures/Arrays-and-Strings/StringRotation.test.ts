import { stringRotation } from "@code/Data-Structures/Arrays-and-Strings"

test("given two strings, str1 and str2, check if str2 is a rotation of str1 using only one call to isSubstring()", () => {
    expect(stringRotation('erbottlewat', 'waterbottle')).toEqual(true);
});
