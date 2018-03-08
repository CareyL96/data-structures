var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    count: 0,
    count2: 0
  };
  _.extend(someInstance, queueMethods);

  return someInstance;
}

var queueMethods = {
  enqueue: function(value){
    this.storage[this.count] = value;
    this.count++;
  },

  dequeue: function(){
    if (this.count - this.count2) {
      var savedValue = this.storage[this.count2];
      delete this.storage[this.count2];
      this.count2++;
      return savedValue;
    }
  },

  size: function(){
    return this.count - this.count2;
  }
};