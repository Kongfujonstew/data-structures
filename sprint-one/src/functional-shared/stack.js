var Stack = function() {

	var someInstance = {
		count: 0
	}
	_.extend(someInstance, stackMethods);
	return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
	this.count++;
	this[this.count] = value;
};

stackMethods.pop = function() {
	if (this.count > 0) {
		var result = this[this.count];
		this[this.count] = undefined;
		this.count--;
	}
	return result;
}

stackMethods.size = function() {
	return this.count;
};

