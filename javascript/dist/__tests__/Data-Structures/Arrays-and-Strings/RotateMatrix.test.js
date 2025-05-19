"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Arrays_and_Strings_1 = require("@code/Data-Structures/Arrays-and-Strings");
test("given an image represented by an NxN matrix, where each pixel in the image is 4bytes, rotate the image by 90 degrees", () => {
    expect((0, Arrays_and_Strings_1.rotateMatrix)([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ])).toEqual([
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
    ]);
    expect((0, Arrays_and_Strings_1.rotateMatrix)([
        [-1, -2, -3],
        [-4, -5, -6],
        [-7, -8, -9],
    ])).toEqual([
        [-7, -4, -1],
        [-8, -5, -2],
        [-9, -6, -3],
    ]);
    expect((0, Arrays_and_Strings_1.rotateMatrix)([
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
