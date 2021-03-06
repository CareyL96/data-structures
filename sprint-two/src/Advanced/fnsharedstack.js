var FSStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    count: 0
  };

  _.extend(someInstance, stackMethods);

  return someInstance;
}

var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },

  pop: function() {
    if (this.count > 0) {
      this.count--;
      var savedValue = this.storage[this.count];
      delete this.storage[this.count];
      return savedValue;
    }
  },

  size: function() {
    return this.count;
  }
};


