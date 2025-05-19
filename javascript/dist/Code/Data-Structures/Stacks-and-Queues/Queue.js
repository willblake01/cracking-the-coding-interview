"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    constructor() {
        this.items = [];
    }
    add(item) {
        return this.items.push(item);
    }
    remove() {
        return this.items.shift();
    }
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
exports.default = Queue;
