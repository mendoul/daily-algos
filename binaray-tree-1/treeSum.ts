// Write a function, treeSum, that takes in the root of a binary tree that contains number values. 
// The function should return the total sum of all values in the tree.

class Node {
  val: number;
  right: null | Node;
  left: null | Node;

  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
};

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// input: root
// output: 21

// create a fucntion that accepts a root
const treeSum = (root: Node): number => {
  // if tree is empty return 0
  if (!root) return 0;
  // create a sum variable
  let sum = 0;
  // create a queue array
  const queue = [root];
  // iterate though the queue as long as exist
  while (queue.length > 0) {
    // create a variable node poping it from queue
    const node = queue.pop();
    // add val to sum
    sum += node.val;
    // if node right exist add to queue
    if (node.right) queue.push(node.right);
    // if node left exist add to queue
    if (node.left) queue.push(node.left);
  };
  // return sum
  return sum;
};  

// create a function that accepts a root
const treeSum = (root: Node): number => {
  // base case: if root is null return 0;
  if (!root) return 0;
  // return recursive on the right and left node
  return root.val + treeSum(root.right) + treeSum(root.left);
};
