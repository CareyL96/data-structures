var BinarySearchTree = function(value) {
  var treeObj = Object.create(BinarySearchTree.prototype);
  
  treeObj.value = value;
  treeObj.left = null;
  treeObj.right = null; 
  
  return treeObj;
};

BinarySearchTree.prototype.insert = function(value) {
// base case:
  // check if value is greater than this.value
    // if this.right is null 
      // if it is, set this.right to BinarySearchTree(value);
// recursive case 
    // if this.right is NOT null
      // this.right.insert(value)
  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
}

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  }
  
  if (value < this.value && this.left !== null) {
    return this.left.contains(value);
  } else if (value > this.value && this.right !== null) {
    return this.right.contains(value);
  }

  return false;
}

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  
}

/*
 * Complexity: What is the time complexity of the above functions?
 */

var rootNode = BinarySearchTree(8);

rootNode.insert(5);