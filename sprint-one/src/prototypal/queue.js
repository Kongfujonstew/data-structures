var Queue = function() {
	var someInstance = Object.create(queueMethods);
	someInstance.first = 1;
	someInstance.last = 0;
	someInstance.count = 0;
	return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.last++;
  this[this.last] = value;
  this.count++;
};

queueMethods.dequeue = function() {
	var result = this[this.first];
  this[this.first] = undefined;
    if (result) {
      this.first++; 
      this.count--;
    }
    return result;
}

queueMethods.size = function() {
    return this.count;
};


