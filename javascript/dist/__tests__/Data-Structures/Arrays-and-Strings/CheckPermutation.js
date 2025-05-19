"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CheckPermutation_1 = __importDefault(require("@code/Data-Structures/Arrays-and-Strings/CheckPermutation"));
test("given two strings, decide if one is a permutation of the other", () => {
    expect((0, CheckPermutation_1.default)('hello', 'olleh')).toEqual(true);
});
