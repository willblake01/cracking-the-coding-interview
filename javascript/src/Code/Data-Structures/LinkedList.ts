class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  head: any;
  tail: any;
  length: number;

  add(value: any) {
    const node = {
      value,
      next: null,
    };
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  remove(value: any) {
    if (this.head === null) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      if (current.next.value === value) {
        current.next = current.next.next;
        this.length--;
        if (current.next === null) {
          this.tail = current;
        }
        return;
      }
    }
    current = current.next;
  }

  find(value: any) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
  isEmpty() {
    return this.length === 0;
  }
  size() {
    return this.length;
  }
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  toArray() {
    const result = [];
    let current = this.head;
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
  toString() {
    let result = '';
    let current = this.head;
    while (current !== null) {
      result += current.value + ' -> ';
      current = current.next;
    }
    return result + 'null';
  }
  toJSON() {
    const result = [];
    let current = this.head;
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    return JSON.stringify(result);
  }
  fromArray(array: any[]) {
    this.clear();
    for (const value of array) {
      this.add(value);
    }
  }
  fromJSON(json: string) {
    const array = JSON.parse(json);
    this.fromArray(array);
  }
  clone() {
    const newList = new LinkedList();
    let current = this.head;
    while (current !== null) {
      newList.add(current.value);
      current = current.next;
    }
    return newList;
  }
}

export default LinkedList;
