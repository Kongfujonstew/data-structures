describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree(1);
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('new child nodes should have a property of parent and the parent should have the right value which in this case is 1', function() {
    tree.addChild(5);
    expect(tree.children[0].hasOwnProperty('parent')).to.equal(true);
    expect(tree.children[0].parent.children[0].parent.children[0].parent.value).to.equal(1);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('removeFromParent should work.', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].removeFromParent();
    expect(tree.children[0]).to.equal(undefined);
    //expect(tree.children[0].parent).to.equal(undefined);
  });





});
