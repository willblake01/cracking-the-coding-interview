"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StringRotation_1 = __importDefault(require("@code/Data-Structures/Arrays-and-Strings/StringRotation"));
test("given two strings, str1 and str2, check if str2 is a rotation of str1 using only one call to isSubstring()", () => {
    expect((0, StringRotation_1.default)('erbottlewat', 'waterbottle')).toEqual(true);
});
