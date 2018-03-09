var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var keyValueTuple = [k, v]
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }
  
  this._storage.get(index).push(keyValueTuple);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var targetBucket = this._storage.get(index);
  var result;
  
  _.each(targetBucket, function(keyValueTuple) {
    if (keyValueTuple[0] === k) {
      result = keyValueTuple[1];
    }
  });
  
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var targetBucket = this._storage.get(index);

  _.each(targetBucket, function(keyValueTuple) {
    if (keyValueTuple[0] === k) {
      targetBucket = targetBucket.splice(keyValueTuple, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


