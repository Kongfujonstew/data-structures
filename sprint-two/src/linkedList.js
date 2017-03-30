var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var val = list.head.value;
    var newHead = list.head.next;
    list.head.next = null;
    list.head = newHead;
    return val;
  };

  list.contains = function(target) {
    if (list.head.value === target) {
      console.log(true);
      return true;
    } else {
      list.contains.bind(this.next);
    }
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
