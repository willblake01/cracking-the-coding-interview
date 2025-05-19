"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Data_Structures_1 = require("@code/Data-Structures");
describe('LinkedList', () => {
    let linkedList;
    beforeEach(() => {
        linkedList = new Data_Structures_1.LinkedList();
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
