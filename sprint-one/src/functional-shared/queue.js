var Queue = function() {
	
	var someInstance = {
		count: 0,
		first: 1,
		last: 0,
	}
	_.extend(someInstance, queueMethods);
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
      }
    if (this.count > 0){
      this.count--;
    }
    return result;
}

queueMethods.size = function() {
    return this.count;
};