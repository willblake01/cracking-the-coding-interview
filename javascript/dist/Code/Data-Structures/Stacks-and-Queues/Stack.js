"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    constructor() {
        this.items = [];
    }
    remove() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }
    add(item) {
        return this.items.push(item);
    }
    peek() {
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
exports.default = Stack;
