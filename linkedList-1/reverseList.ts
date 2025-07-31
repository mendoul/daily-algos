// Write a function, reverseList, that takes in the head of a linked list as an argument. 
// The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.

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

a.next = b;
b.next = c;
c.next = d;

// input: a -> b -> c -> d
// output: d -> c -> b -> a

// create a function a function that accepts a head node
const reverseList = (head: Node): Node => {
  // create a variable current set to head
  let current = head;
  // create a variable previous set to null
  let previous = null;
  // iterate through the nodes using a while loop
  while (current) {
  // create a next varibale and set to currents next
  const next = current.next;  
  // reasign currents next to the previous
  current.next = previous;  
  // reasign previous to the current
  previous = current;  
  // reasign current to the next
  current = next;
  };  
  // return the previous
  return previous;
};  

// create a function that accepts a head node and a previous as default param
const reverseList = (head: Node, prev: null | Node = null): Node => {
  // Base Case: if the head is head is null return previous
  if (head === null) return prev;
  // create variable next and set to heads next
  const next = head.next;
  // reasign next next to the head
  head.next = prev;
  // return function passing in the next, and the previous
  return reverseList(next, head)
};  
