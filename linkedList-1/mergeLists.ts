// Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments. 
// The function should merge the two lists together into single sorted linked list. 
// The function should return the head of the merged linked list.
// Do this in-place, by mutating the original Nodes.
// You may assume that both input lists are non-empty and contain increasing sorted numbers.

class Node {
  val: number;
  next: Node | null;

  constructor (val) {
    this.val = val;
    this.next = null;
  };
};

const a = new Node(1);
const b = new Node(3);
const c = new Node(5);
const d = new Node(7);
const e = new Node(9);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
const x = new Node(2);
const y = new Node(4);
const z = new Node(6);
x.next = y;
y.next = z;

// input: 2 seperate nodes
// output: 1 -> 2-> 3-> 4-> 5-> 6-> 7-> 9

create a function that accepts 2 heads
const mergeLists = (head1: Node, head2: Node): Node => {
  // create a dummy node
  const dummy = new Node(0);
  // create a current1, current2, tail
  let
  current1 = head1,
  current2 = head2,
  tail = dummy;
  // iterate through nodes
  while (current1 && current2) {
    // if current1 is smaller then current2 add current 1 to tail next and reassign
    if (current1.val < current2.val) {
      tail.next = current1;
      current1 = current1.next;
    // if current2 2 is smaller add to tails next and reassign
    } else {
      tail.next = current2;
      current2 = current2.next;
    }
    // reassign tail to its next
    tail = tail.next;
  };
  // if current1 has aditional nodes add to tail next
  if (current1) tail.next = current1;
  // if current2 has additional nodes add to tails next 
  if (current2) tail.next = current2;
  // return dummy next
  return dummy.next;
};  

// create a function that aceepts 2 head nodes
const mergeLists = (head1: Node, head2: Node): Node => {
  // if head1 & head2 are null return null
  if (!head1 && !head2) return null;
  // if head1 is null return head2
  if (!head1) return head2;
  // if head2 is null return head 1
  if (!head2) return head1;
  // if head1 is smaller then head2 
  if (head1.val < head2.val) {
    // return head1 passing in a recursive function
    const next1 = head1.next;
    head1.next = mergeLists(next1, head2);
    return head1;
  // if head2 is smaller
  } else {
    // return head2 passing in a recursive function 
    const next2 = head2.next;
    head2.next = mergeLists(head1, next2);
    return head2;
  }
};    