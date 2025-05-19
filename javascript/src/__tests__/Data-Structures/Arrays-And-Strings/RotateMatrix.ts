import rotateMatrix from "@code/Data-Structures/Arrays-and-Strings/RotateMatrix"

test("given an image represented by an NxN matrix, where each pixel in the image is 4bytes, rotate the image by 90 degrees", () => {
    expect(rotateMatrix([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ])).toEqual([
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
    ]);

    expect(rotateMatrix([
        [-1, -2, -3],
        [-4, -5, -6],
        [-7, -8, -9],
    ])).toEqual([
        [-7, -4, -1],
        [-8, -5, -2],
        [-9, -6, -3],
    ]);

    expect(rotateMatrix([
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
