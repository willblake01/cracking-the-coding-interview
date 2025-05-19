"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotateMatrix = void 0;
const utils_1 = require("@code/utils");
exports.rotateMatrix = (0, utils_1.memoize)((matrix) => {
    const n = matrix.length;
    // Rotate the matrix in place
    for (let layer = 0; layer < n / 2; layer++) {
        const first = layer;
        const last = n - layer - 1;
        for (let i = first; i < last; i++) {
            const offset = i - first;
            const top = matrix[first][i]; // Save top
            // Left -> Top
            matrix[first][i] = matrix[last - offset][first];
            // Bottom -> Left
            matrix[last - offset][first] = matrix[last][last - offset];
            // Right -> Bottom
            matrix[last][last - offset] = matrix[i][last];
            // Top -> Right
            matrix[i][last] = top;
        }
    }
    ;
    // Return the rotated matrix
    return matrix;
});
