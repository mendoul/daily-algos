// Write a function, removeNode, that takes in the head of a linked list and a target value as arguments. 
// The function should delete the node containing the target value from the linked list and return the head of the resulting linked list. 
// If the target appears multiple times in the linked list, only remove the first instance of the target in the list.
// Do this in-place.
// You may assume that the input list is non-empty.
// You may assume that the input list contains the target.

class Node {
  val: string;
  next: null | Node;

  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// input: Node and a val
// output: Mode with value added

// create a function that accepts a head and a target
const removeNode = (head: Node, target: string): Node => {
  // if the target is the fisrt node return heads next
  if (head.val === target) return head.next;
  // create a previous, and current
  let 
  previous = null,
  current = head;
  // iterate through nodes
  while (current) {
    // if target remove and return head
    if (target === current.val) {
      previous.next = current.next;
      return head;
    }
    // ressign previous and current
    previous = current;
    current = current.next;
  };
};  

// create a function that accepts a head previous and a target
const removeNode = (head, target) => {
  // if the head is null return null
  if (head === null) return null;
  // base case: if the heads val is target return heads next
  if (head.val === target) return head.next;
  // heads next will be assigned to the recursive call
  head.next = removeNode(head.next, target)
  // return head
  return head;
};  