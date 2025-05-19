"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Stacks_and_Queues_1 = require("@code/Data-Structures/Stacks-and-Queues");
describe('Stack', () => {
    let stack;
    beforeEach(() => {
        stack = new Stacks_and_Queues_1.Stack();
    });
    test('should initialize an empty stack', () => {
        expect(stack.isEmpty()).toBe(true);
    });
    test('should push an item onto the stack', () => {
        stack.add(1);
        expect(stack.isEmpty()).toBe(false);
    });
    test('should pop an item from the stack', () => {
        stack.add(1);
        const poppedItem = stack.remove();
        expect(poppedItem).toBe(1);
        expect(stack.isEmpty()).toBe(true);
    });
    test('should return null when popping from an empty stack', () => {
        const poppedItem = stack.remove();
        expect(poppedItem).toBe(null);
    });
    test('should peek at the top item of the stack', () => {
        stack.add(1);
        const topItem = stack.peek();
        expect(topItem).toBe(1);
    });
});
