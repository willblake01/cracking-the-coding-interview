"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StringCompression_1 = __importDefault(require("@code/Data-Structures/Arrays-and-Strings/StringCompression"));
test("compresses string to show integers for repeated characters", () => {
    expect((0, StringCompression_1.default)('aabcccccaaa')).toEqual('a2b1c5a3');
});
