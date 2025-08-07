// Write a function, treeIncludes, that takes in the root of a binary tree and a target value. 
// The function should return a boolean indicating whether or not the value is contained in the tree.

class Node {
  val: string;
  right: null | Node;
  left: null | Node;

  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// create a function that accepts a root and target
const treeIncludes = (root: Node, target: string): boolean => {
  // if the root is null return false
  if (!root) return false;
  // create a variable queue
  const queue = [root];
  // iterate through the queue
  while (queue.length > 0) {
    // create a node variable
    const node = queue.pop();
    // if the val is found return true
    if (target === node.val) return true;
    // if the node right exist add to queue
    if (node.right) queue.push(node.right);
    // if the node left exist add to queue
    if (node.left) queue.push(node.left);
  };  
  // if val not found return false
  return false;
};  

// create a function that accepts a root and a target
const treeIncludes = (root: Node, target: string): boolean => {
  // if the root is null return false
  if (root === null) return false;
  // if the roots value is same as target return true
  if (root.val === target) return true;
  // return recursive passing in right and left of root
  return treeIncludes(root.right, target) || treeIncludes(root.left, target);
};
console.log(treeIncludes(a, 'e'))