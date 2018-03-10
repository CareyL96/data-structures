var PSQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
  this.count2 = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.count] = value;
  this.count++;
}

Queue.prototype.dequeue = function(){
  if (this.count - this.count2) {
    var savedValue = this.storage[this.count2];
    delete this.storage[this.count2];
    this.count2++;
    return savedValue;
  }
}

Queue.prototype.size = function(){
  return this.count - this.count2;
}


