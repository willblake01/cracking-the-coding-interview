import Queue from "@code/Stacks-and-Queues/Queue"

describe('Queue', () => {
  let queue: Queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it('should add items to the queue', () => {
    queue.add(1);
    queue.add(2);
    expect(queue.peek()).toBe(1);
  });

  it('should remove items from the queue', () => {
    queue.add(1);
    queue.add(2);
    queue.remove();
    expect(queue.peek()).toBe(2);
  });

  it('should peek at the first item in the queue', () => {
    queue.add(1);
    expect(queue.peek()).toBe(1);
  });

  it('should check if the queue is empty', () => {
    expect(queue.isEmpty()).toBe(true);
    queue.add(1);
    expect(queue.isEmpty()).toBe(false);
  });
});
