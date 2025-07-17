// Write a function, getNodeValue, that takes in the head of a linked list and an index. 
// The function should return the value of the linked list at the specified index.
// If there is no node at the given index, then return null.

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
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// input: a, 2
// output: 'c'

// create a function that accepts a head node and a index
const getNodeValue = (head: Node, i: number): string | null => {
  // create a variable counter
  let counter = 0;
  // create a variable current
  let current = head;
  // iterate through the nodes
  while (current) {
    // if the index exist return the val
    if (i === counter) return current.val;
    // increment counter
    counter++;
    // reasign current
    current = current.next;
  };
  // if the index dosent exist return null
  return null;
};  

// create a function that accepts a head node index and default param counter
const getNodeValue = (head: Node, i: number): string | null => {
  // Base Case: if the head is null return null
  if (head === null) return null;
  // if index is equal to counter return the heads value
  if (i === 0) return head.val;
  // return the function passing in the heads next, the index, and increment counter
  return getNodeValue(head.next, --i)
};  
console.log(getNodeValue(a, 3))