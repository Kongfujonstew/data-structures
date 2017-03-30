var Queue = function() {
  this.first = 1;
  this.last = 0;
  this.count = 0;
};

Queue.prototype.enqueue = function(value) {
  this.last++;
  this[this.last] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
	var result = this[this.first];
  this[this.first] = undefined;
  if (result) {
    this.first++; 
    this.count--;
  }
  return result;
}

Queue.prototype.size = function() {
  return this.count;
};


