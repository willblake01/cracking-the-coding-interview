"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Arrays_and_Strings_1 = require("@code/Data-Structures/Arrays-and-Strings");
test("strings are one change away", () => {
    expect((0, Arrays_and_Strings_1.oneAway)('pale', 'ple')).toEqual(true);
    expect((0, Arrays_and_Strings_1.oneAway)('pales', 'pale')).toEqual(true);
    expect((0, Arrays_and_Strings_1.oneAway)('pale', 'bale')).toEqual(true);
    expect((0, Arrays_and_Strings_1.oneAway)('pale', 'bake')).toEqual(false);
});
