var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }
    
    list.tail = newNode;
  };

  list.removeHead = function() {
    var removedHeadValue = list.head.value;
    list.head = list.head.next;
    return removedHeadValue;
  };

  list.contains = function(target, node) {
    node = node || list.head;
    if (node.value === target) {
      return true;
    }
    
    node = node.next;
    if (node !== null) {
      return list.contains(target, node);
    }
    return false;
    
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var list = LinkedList();
list.addToTail()
list.contains(4);
