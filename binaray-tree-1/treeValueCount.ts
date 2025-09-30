// Write a function, treeValueCount, that takes in the root of a binary tree and a target value. 
// The function should return the number of times that the target occurs in the tree.

class Node {
  val: number;
  left: null | Node;
  right: null | Node;

  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// create a function that accepts a node root and a target
const treeValueCount = (root: Node, target: number): number => {
  // if the root is null return 0
  if (!root) return 0;
  const rightSum = treeValueCount(root.right, target);
  // create left sum variable
  const leftSum = treeValueCount(root.left, target);
  // return the sum of the right and left values and check if the current root value is a match
  if (root.val === target) return 1 + rightSum + leftSum;
  else return rightSum + leftSum;
};  


// create a function that accepts a root node and a target value
const treeValueCount = (root: Node, target: number): number => {
  // if no root return 0;
  if (!root) return 0;
  // create a sum variable
  let sum = 0;
  // create a queue variable 
  const queue = [root];
  // iterate while the queue length is bigget then 0
  while (queue.length > 0) { 
    // create a current variable and pop of queue
    const current = queue.pop();
    // if the current has a right push to queue
    if (current.right) queue.push(current.right);
    // if current has a left push to queue
    if (current.left) queue.push(current.left);
    // if currents value is same as target incrememnt sum
    if (current.val === target) sum++;
  };

  // return sum
  return sum;
};
