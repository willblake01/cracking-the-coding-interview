import rotateMatrix from "@code/Data-Structures/Arrays-and-Strings/RotateMatrix"

test("given an image represented by an NxN matrix, where each pixel in the image is 4bytes, rotate the image by 90 degrees", () => {
    expect(rotateMatrix()).toEqual([
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
    ]);
});
