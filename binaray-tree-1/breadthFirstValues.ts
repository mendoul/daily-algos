// Write a function, breadthFirstValues, that takes in the root of a binary tree. 
// The function should return an array containing all values of the tree in breadth-first order.

class Node {
  val: string;
  right: null | Node;
  left: null | Node;

  constructor (val) {
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

// input: root
// output: [a, b, c, d, e, f]

// create a function that accepts a root
const breadthFirstValues = (root: Node): string[] => {
  // if no root return empty array
  if (!root) return [];
  // create a values array
  const values = [];
  // create a queue array assign to root
  const queue = [root];
  // iterate though queue array as long as none empty
  while (queue.length > 0) {
    // create variable node from unshift queue
    const node = queue.shift();
    // push val to values
    values.push(node.val);  
    // if left exist add to queue
    if (node.left) queue.push(node.left);
    // if right exist add to queue
    if (node.right) queue.push(node.right);
  };
  // return values
  return values;
};  


