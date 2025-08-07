// Write a function, depthFirstValues, that takes in the root of a binary tree. 
// The function should return an array containing all values of the tree in depth-first order.

class Node {
  val: string;
  right: null | Node;
  left: null | Node;
  constructor (val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node ('a');
const b = new Node ('b');
const c = new Node ('c');
const d = new Node ('d');
const e = new Node ('e');
const f = new Node ('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// input: root
// output: [a, b, d, e, c, f]

// create a function that accepts a root
const depthFirstValues = (root: Node) => {  
  // if root is empty return empty array
  if (!root) return [];
  // create a values and stack arrays
  const values = [];
  const stack = [root];
  // iterate through the tree
  while (stack.length > 0) {
    // pop value from stack and add to values
    const node = stack.pop();
    // add values to array
    values.push(node.val);
    // if right exist push into stack
    if (node.right) stack.push(node.right);
    // if left exists push into stack
    if (node.left) stack.push(node.left);
  };  
  // return values
  return values;
};  


// create a function depthFirstValues that accepts a root
const depthFirstValues = (root: Node): string[] => { 
  // if the root is null return empty array
  if (root === null) return [];
  // recurse the function on the left values
  const leftValues = depthFirstValues(root.left);
  // recurse function on the right values
  const rightValues = depthFirstValues(root.right)
  // return vaules flattened
  return [root.val, ...leftValues, ...rightValues];
};  
