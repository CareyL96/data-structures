var FQueue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var count2 = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    if (count - count2) {
      var stored = storage[count2];
      delete storage[count2];
      count2++;
      return stored;
    }
  };

  someInstance.size = function() {
    return count - count2;
  };

  return someInstance;
};
