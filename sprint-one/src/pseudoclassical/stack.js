var Stack = function() {
  this.count = 0;
};


Stack.prototype.push = function(value) {
	this.count++;
	this[this.count] = value;
};

Stack.prototype.pop = function() {
	if (this.count > 0) {
		var result = this[this.count];
		this[this.count] = undefined;
		this.count--;
	}
	return result;
}

Stack.prototype.size = function() {
	return this.count;
};


