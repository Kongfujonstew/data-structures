var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTree.prototype);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  return newTree;
};

BinarySearchTree.prototype.insert = function(newValue) {
  if (newValue < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(newValue);
    } else {
      this.left.insert(newValue);
    }
  } else if (newValue > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(newValue)
    } else {
      this.right.insert(newValue);
    }
  } else {
    this.left = BinarySearchTree(newValue);
  }
};

BinarySearchTree.prototype.contains = function(val) {
  var wasFound = false;
  var searchTree = function(tree) {
    if (tree.value === val) {
      wasFound = true;
    } else if (val < tree.value) {
      if (tree.left) {
        searchTree(tree.left);
      }
    } else if (val > tree.value) {
      if (tree.right) {
        searchTree(tree.right);
      }
    }
  }
  searchTree(this);
  return wasFound;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  var traverseTree = function(tree) {
    if (tree.value) {
      cb(tree.value);
    }
    if (tree.left) {
      tree.left.depthFirstLog(cb);
      }
    if (tree.right) {
      tree.right.depthFirstLog(cb);
    }
  };
  traverseTree(this);
};

/*
 * Complexity: What is the time complexity of the above functions?

insert - O(log(n))
contains - O(log(n))
depthFirstLog - O(n)

 */