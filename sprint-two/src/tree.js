var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = []; 
  newTree.parent = null;
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newNode = Tree(value);
  newNode.parent = this;
  this.children.push(newNode);
};

treeMethods.contains = function(target) {
  var wasFound = false;
  var searchTree = function(tree) {
    if (tree.value === target) {
      wasFound = true;
    }
    for (var i = 0; i < tree.children.length; i++) {
      searchTree(tree.children[i]);
    }
  }
  searchTree(this);
  return wasFound;
};

treeMethods.removeFromParent = function() {
  var target = this.value;
  this.parent.children.forEach(function(child, index, col) {
    if (child.value === target) {
      col[index] = undefined;
    }
  });
  this.parent = null;
  
}



/*
 * Complexity: What is the time complexity of the above functions?

 addChild - O(1)
 contains - O(n)

 */
