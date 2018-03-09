var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
}

treeMethods.contains = function(target, node) {
  node = node || this;
  
  if (node.value === target) { 
    return true;
  }
  
  for (var i = 0; i < node.children.length; i++) {
    if (node.contains(target, node.children[i])) { 
      return true; 
    };
  }
  
  return false;
  
  //return node.contains(target, );
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
