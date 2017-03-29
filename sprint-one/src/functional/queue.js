var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var last = 0;
  var first = 1;
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    last++;
    storage[last] = value;
    count++;
  };

  someInstance.dequeue = function() {
      var result = storage[first];
      storage[first] = undefined;
      if (result) {
        first++; 
      }
    if (count > 0){
      count--;
    }
    return result;
  };

  someInstance.size = function() {
    return count;
  };
  return someInstance;
};
