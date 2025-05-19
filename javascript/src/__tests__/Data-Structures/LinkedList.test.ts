import { LinkedList } from "@code/Data-Structures";

describe('LinkedList', () => {
  let linkedList: LinkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
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
