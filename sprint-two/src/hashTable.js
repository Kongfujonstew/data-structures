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
  console.log(this._filled);
  if (this._filled >= (this._limit * .625)) {
    this._limit = this._limit * 2;
    // this._storage = rebuildStorage(this, this._limit);
    // rebuildHashTable(this, this._limit);
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
  // this.insert(k, undefined);
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      this._storage.get(index)[i][1] = undefined;
      this._storage.get(index)[i][0] = undefined;
    }
  }
  // if (this._limit !== 8  && (this._filled < (this._limit * .25))) {
  //   console.log('half');
  //   this._limit = this._limit / 2;
  // }
};

var rebuildStorage = function(oldHashTable, newLimit){
  var rebuiltHashTable = new HashTable;
  for (var i = 0; i < newLimit; i++) {
    if (oldHashTable._storage.get(i)) {
      for (var j = 0; j < oldHashTable._storage.get(i).length; j++) {
        var key = oldHashTable._storage.get(i)[j][0];
        var value = oldHashTable._storage.get(i)[j][1];
        rebuiltHashTable.insert(key, value);
      }
    }
  }
  return rebuiltHashTable._storage;
};
// var rebuildHashTable = function(oldHashTable, oldLimit){
//   var rebuiltHashTable = new HashTable;
//   rebuiltHashTable._limit = oldLimit * 2;
//   for (var i = 0; i < oldLimit; i++) {
//     if (oldHashTable._storage.get(i)) {
//       for (var j = 0; j < oldHashTable._storage.get(i).length; j++) {
//         var key = oldHashTable._storage.get(i)[j][0];
//         var value = oldHashTable._storage.get(i)[j][1];
//         rebuiltHashTable.insert(key, value);
//       }
//     }
//   }
//   return rebuiltHashTable;
// };

/*
 * Complexity: What is the time complexity of the above functions?

insert - O(1)
retrieve - O(1)
remove - O(1)

 */

