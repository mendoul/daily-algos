class Node {
  val: number;
  right: null | Node;
  left: null | Node;

  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
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

// create a function that accepts a root
const maxPathSum = (root: Node): number => {
  // base case is the root is null return tiny number
  if (!root) return -Infinity;
  // if the root has no children return the val
  if (!root.left && !root.right) return root.val; 
  // return the root val and max from children
  return root.val + Math.max(maxPathSum(root.right), maxPathSum(root.left));
};
