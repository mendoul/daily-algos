class Node {
  val: number;
  right: Node | null;
  left: Node | null;

  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

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

// create a function that accepts a tree root
const treeMinVal = (root: Node): number => { 
  // if no root return undefined
  if (!root) return undefined;
  // create a variable minNum
  let minNum = root.val;
  // create a queue and initialize to root
  const queue = [root];
  // loop through tree
  while (queue.length > 0) {
    //create current variable
    const current = queue.shift();
    // add right and left of leaf to queue
    if (current.right) queue.push(current.right);
    if (current.left) queue.push(current.left);
    // set minNum
    minNum = Math.min(minNum, current.val);
  };
  // return minnum
  return minNum;
};  

// create a function that accepts a root
const treeMinVal = (root: Node): number => {
  // if no root return infinity
  if (!root) return Infinity;
  // recurse left leaf
  const minLeftLeaf = treeMinVal(root.left);
  // recurse right leaf 
  const minRightLeaf = treeMinVal(root.right);
  // return min of root, leftval, right val
  return Math.min(root.val, minLeftLeaf, minRightLeaf);
};  

