var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._filled = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(index)) {
    this._storage.set(index, [[k, v]]);
    this._filled++;
  } else if (!this.retrieve(k)) {
    this._storage.get(index).push([k, v]);
  } else {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        this._storage.get(index)[i][1] = v;
      }
    }
  }
  if (this._filled >= (this._limit * 0.625)) {
    this._storage = this.rebuildStorage(this._limit, 'double');
    this._limit *= 2;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      return this._storage.get(index)[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)){
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        this._storage.get(index)[i][1] = undefined;
        // this._storage.get(index)[i][0] = undefined;
      }
    }
  }
  if ((this._limit >= 8) && (this._filled < (this._limit * 0.5))) {
    this._storage = this.rebuildStorage(this._limit, 'half');
    this._limit /= 2;
  }
};
HashTable.prototype.rebuildStorage = function(oldLimit, doubleOrHalve){
  var rebuiltHashTable = new HashTable;
  if (doubleOrHalve === 'double') {
    rebuiltHashTable._limit = oldLimit * 2;
  } else if (doubleOrHalve === 'half') {
    rebuiltHashTable._limit = oldLimit / 2;
  }
  rebuiltHashTable._storage = LimitedArray(rebuiltHashTable._limit);
  for (var i = 0; i < oldLimit; i++) {
    if (this._storage.get(i)) {
      for (var j = 0; j < this._storage.get(i).length; j++) {
        rebuiltHashTable.insert(this._storage.get(i)[j][0], 
          this._storage.get(i)[j][1]);
      }
    }
  }
  return rebuiltHashTable._storage;
};

/*
 * Complexity: What is the time complexity of the above functions?

insert - O(1)
retrieve - O(1)
remove - O(1)
rebuildStorage - O(n)

 */

