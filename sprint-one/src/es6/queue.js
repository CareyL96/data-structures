class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
    this.count2 = 0;
  }

  enqueue(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  dequeue() {
    if (this.count - this.count2) {
      var savedValue = this.storage[this.count2];
      delete this.storage[this.count2];
      this.count2++;
      return savedValue;
    }
  }

  size() {
    return this.count - this.count2;
  }
}
