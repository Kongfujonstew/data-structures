var Stack = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    count++;
    storage[count] = value;
  };

  someInstance.pop = function() {
    var result = storage[count];
    storage[count] = undefined;
    if (count > 0) {
      count--;
    }
    return result;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};





