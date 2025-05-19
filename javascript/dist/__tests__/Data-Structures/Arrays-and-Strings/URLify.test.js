"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Arrays_and_Strings_1 = require("@code/Data-Structures/Arrays-and-Strings");
test("replace all spaces in a string with '%20'", () => {
    expect((0, Arrays_and_Strings_1.URLify)('Mr John Smith   ', 13)).toEqual('Mr%20John%20Smith');
});
