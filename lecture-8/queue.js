class Queue {
  constructor() {
    this.queue = [];
  }

  // add data to the queue, O(1)
  enqueue(val) {
    this.queue.push(val);
    return val;
  }
  // remove first element in queue
  dequeue() {
    return this.queue.shift();
  }
  // see queue size, O(1)
  size() {
    return this.queue.length;
  }
  // see first element in line, O(1)
  peek() {
    return this.queue[this.queue.length - 1];
  }

  // see all data in the queue, O(1)
  print() {
    console.log(this.queue);
  }
}

const queue = new Queue();
queue.print(); //[]

console.log(queue.enqueue(1)); //1
console.log(queue.enqueue(2)); //2
console.log(queue.enqueue(3)); //3
queue.print(); // [ 1, 2, 3 ]
console.log(queue.size()); //3

console.log(queue.dequeue()); //1
queue.print(); //[ 2, 3 ]

console.log(queue.size()); //2
console.log(queue.peek()); //3
