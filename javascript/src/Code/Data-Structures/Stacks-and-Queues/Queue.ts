type Item = unknown;

type Items = Item[];

class Queue {
  constructor() {
    this.items = [];
  }
  
  items: Items;

  add(item: Item) {
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

export default Queue;
