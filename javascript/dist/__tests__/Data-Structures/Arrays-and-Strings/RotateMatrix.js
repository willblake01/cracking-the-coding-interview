"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RotateMatrix_1 = __importDefault(require("@code/Data-Structures/Arrays-and-Strings/RotateMatrix"));
test("given an image represented by an NxN matrix, where each pixel in the image is 4bytes, rotate the image by 90 degrees", () => {
    expect((0, RotateMatrix_1.default)([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ])).toEqual([
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
    ]);
    expect((0, RotateMatrix_1.default)([
        [-1, -2, -3],
        [-4, -5, -6],
        [-7, -8, -9],
    ])).toEqual([
        [-7, -4, -1],
        [-8, -5, -2],
        [-9, -6, -3],
    ]);
    expect((0, RotateMatrix_1.default)([
        [1, 1, 1, 1],
        [2, 2, 2, 2],
        [3, 3, 3, 3],
        [4, 4, 4, 4],
    ])).toEqual([
        [4, 3, 2, 1],
        [4, 3, 2, 1],
        [4, 3, 2, 1],
        [4, 3, 2, 1],
    ]);
});
