var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      newNode.previous = list.tail;
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.addToHead = function(value) {
    var newNode = Node(value);
    if (!list.tail) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      newNode.next = list.head;
      list.head.previous = newNode;
      list.head = newNode;
    }
  };

  list.removeHead = function() {
    var val = list.head.value;
    list.head = list.head.next;
    if (list.head) {
      list.head.previous = null;
    }
    return val;
  };

  list.removeTail = function() {
    var val = list.tail.value;
    list.tail = list.tail.previous;
    if (list.tail) {
      list.tail.next = null;
    }
    return val;
  }

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.previous = null;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

 addToTail - O(1)
 removeHead - O(1)
 contains - O(n)
 
 */
