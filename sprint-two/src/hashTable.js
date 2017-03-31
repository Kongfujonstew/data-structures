var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage[index]) {
    this._storage[index] = [[k, v]];
  } else if (this.retrieve(k) === undefined) {
    this._storage[index].push([k, v]);
  } else {
    this._storage[index].forEach(function(tuple) {
      if (tuple[0] === k) {
        tuple[1] = v;
      }
    });
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
       this._storage[index][i][1] = undefined;
    }
  }
  // this.insert(k, undefined);
};

/*
 * Complexity: What is the time complexity of the above functions?

insert - O(1)
retrieve - O(1)
remove - O(1)

 */

