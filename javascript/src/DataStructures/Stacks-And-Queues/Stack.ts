type Item = string | number | object | boolean | null | undefined | symbol | bigint | Function | Array<any>;

type Items = Item[];

class Stack {
  constructor() {
    this.items = [];
  }

  items: Items;

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    return this.items.pop();
    
  }

  push(item: Item) {
    return this.items.push(item);
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

export default Stack;
