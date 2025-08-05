// Write a function, insertNode, that takes in the head of a linked list, a value, and an index. 
// The function should insert a new node with the value into the list at the specified index. 
// Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.
// Do this in-place.
// You may assume that the input list is non-empty and the index is not greater than the length of the input list.

class Node {
  val: string;
  next: null | Node;

  constructor (val) {
    this.next = null;
    this.val = val;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

// input: Node, val, index
// output: Node

// create a function that accepts a node, val, index
const insertNode = (head: Node, val: string, index: number): Node => {
  // create our new node
  const newNode = new Node(val);
  // if the index is the fisrt add node and return
  if (index === 0) {
    newNode.next = head;
    return newNode;
  };
  // create a varible count, previous, current
  let
  count = 0,
  current = head;
  // iterate through the nodes
  while (current) {
    // if the count is equal to index, add val and return head
    if (count === index - 1) {
      newNode.next = current.next;
      current.next = newNode;
      return head;
    };
    // reassign previous, current, increment count
    count++;
    current = current.next;    
  };  
};



