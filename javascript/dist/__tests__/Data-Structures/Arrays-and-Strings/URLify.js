"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const URLify_1 = __importDefault(require("@code/Data-Structures/Arrays-and-Strings/URLify"));
test("replace all spaces in a string with '%20'", () => {
    expect((0, URLify_1.default)('Mr John Smith   ', 13)).toEqual('Mr%20John%20Smith');
});
