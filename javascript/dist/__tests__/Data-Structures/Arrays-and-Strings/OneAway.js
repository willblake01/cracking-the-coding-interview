"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const OneAway_1 = __importDefault(require("@code/Data-Structures/Arrays-and-Strings/OneAway"));
test("strings are one change away", () => {
    expect((0, OneAway_1.default)('pale', 'ple')).toEqual(true);
    expect((0, OneAway_1.default)('pales', 'pale')).toEqual(true);
    expect((0, OneAway_1.default)('pale', 'bale')).toEqual(true);
    expect((0, OneAway_1.default)('pale', 'bake')).toEqual(false);
});
