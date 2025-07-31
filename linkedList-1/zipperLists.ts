// Write a function, zipperLists, that takes in the head of two linked lists as arguments. 
// The function should zipper the two lists together into single linked list by alternating nodes. 
// If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. 
// The function should return the head of the zippered linked list.
// Do this in-place, by mutating the original Nodes.
// You may assume that both input lists are non-empty.

class Node { 
  val: string;
  next: null | Node;

  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");

a.next = b;
b.next = c;

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");

x.next = y;
y.next = z;

// input: Head1 a -> b -> c,  Head2 x -> y -> z
// output: head1 a -> x -> b -> y -> c -> z

// create a function zipperLists that accepts 2 head nodes
const zipperLists = (head1: Node, head2: Node): Node => { 
  // create a current 1 & 2, count, tail, head
  const head = head1;
  let 
  current1 = head1.next,
  current2 = head2,
  count = 0,
  tail = head;
  // iterate through nodes
  while (current1 && current2) { 
    // if count is even add current2 node and reassign current2
    if (count % 2 === 0) {
      tail.next = current2;
      current2 = current2.next;
    // if count is odd add current1 node and reassign current 1
    } else {
      tail.next = current1;
      current1 = current1.next;
    }
    // increment count
    count++;
    // reassign tail
    tail = tail.next;
  };
  // if current1 isnt null add to tail
  if (current1) tail.next = current1;
  // if current2 isnt null add to tail
  if (current2) tail.next = current2;
  // return head
  return head;
};  
console.log(zipperLists(a, x))