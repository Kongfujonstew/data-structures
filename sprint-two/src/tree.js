var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = []; 
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var wasFound = false;
  var helper = function(tree) {
    //console.log(tree.value);
    if (tree.value === target) {
      wasFound = true;
    }
    for (var i = 0; i < tree.children.length; i++) {
      console.log(i);
      helper(tree.children[i]);
    }
  }
  helper(this);
  return wasFound;
};



/*
 * Complexity: What is the time complexity of the above functions?

 addChild - O(1)
 contains - O(n)

 */
