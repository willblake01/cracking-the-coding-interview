"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = __importDefault(require("@code/Data-Structures/LinkedList"));
describe('LinkedList', () => {
    let linkedList;
    beforeEach(() => {
        linkedList = new LinkedList_1.default();
    });
    it('should add items to the linked list', () => {
        linkedList.add(1);
        linkedList.add(2);
        expect(linkedList.head.value).toBe(1);
        expect(linkedList.tail.value).toBe(2);
    });
    it('should remove items from the linked list', () => {
        linkedList.add(1);
        linkedList.add(2);
        linkedList.remove(1);
        expect(linkedList.head.value).toBe(2);
    });
    it('should find items in the linked list', () => {
        linkedList.add(1);
        linkedList.add(2);
        const node = linkedList.find(1);
        expect(node.value).toBe(1);
    });
});
