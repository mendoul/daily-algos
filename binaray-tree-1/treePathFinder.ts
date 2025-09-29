// Write a function, pathFinder, that takes in the root of a binary tree and a target value. 
// The function should return an array representing a path to the target value. 
// If the target value is not found in the tree, then return null.
// You may assume that the tree contains unique values.

class Node {
  val: string;
  right: null | Node;
  left: null | Node;

  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// create a helper function that accepts a root node
const treePathFinderHelper = (root: Node, target: String): String[] => {
  // base case: if the node is null return null
  if (!root) return null;
  // if target is found return target
  if (target === root.val) return [root.val];
  // if right is not null recurse
  const rightLeaf = treePathFinderHelper(root.right, target);
  if(rightLeaf) {
    rightLeaf.push(root.val);
    return rightLeaf;
  }
  // if left is not null recurse
  const leftLeaf = treePathFinderHelper(root.left, target);
  if(leftLeaf) {
    leftLeaf.push(root.val);
    return leftLeaf;
  };
  // if no children return null
  return null;
};
// reverse output
const treePathFinder = (root: Node, target: String): String[] => {
  // create result variable
  const result = treePathFinderHelper(root, target);
  console.log(result)
  // if the result is an array reverse
  if (result) return result.reverse();
  // if the result is null return null
  else return null;
}

