

// Instantiate a new graph
var Graph = function() {
  var newGraph = Object.create(Graph.prototype);
  return newGraph;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var wasFound = false;
  if (this[node] !== undefined) {
    wasFound = true;
  } 
  return wasFound;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this[node]) {
    for (var key in this[node]){
      this[key][node] = undefined;
    }
    this[node] = undefined;
    return true;
  }
  return false;
};

// Returns a boolean indicating whether two specified nodes are connected.  
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var key = toNode;
  if (this[fromNode][key]) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode][toNode] = true;
  this[toNode][fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this[fromNode][toNode] = undefined;
  this[toNode][fromNode] = undefined;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

addNode - O(1)
contains - O(1)
removeNode - O(n)
hasEdge - O(1)
addEdge - O(1)
removeEdge - O(1)
forEachNode - O(n)

 */


