// Instantiate a new graph
var Graph = function() {
  this.vertices = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertices[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.vertices.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.vertices[node];
  for (var key in this.vertices) {
    this.removeItemFromPropertyArray(key, node)
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.vertices[fromNode].includes(toNode) && this.vertices[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.vertices[fromNode].push(toNode);
  this.vertices[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.hasEdge(fromNode, toNode)) {
    this.removeItemFromPropertyArray(fromNode, toNode);
    this.removeItemFromPropertyArray(toNode, fromNode);
  }
};

Graph.prototype.removeItemFromPropertyArray = function(fromNode, toNode) {
  this.vertices[fromNode].splice(this.vertices[fromNode].indexOf(toNode), 1);
}

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.vertices) {
    cb(key, this.vertices[key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var exampleGraph = new Graph();

exampleGraph.forEachNode(exampleGraph.addEdge(5, 10))