// Write a function, linkedListFind, that takes in the head of a linked list and a target value. 
// The function should return a boolean indicating whether or not the linked list contains the target.

class Node {
  val: string;
  next: null | Node;

  constructor(val: string) {
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

// input: a "c"
// output: true

// create a function that accepts a head node and a target value
const linkedListFind = (head: Node, target: string): boolean => { 
  // create a variable current
  let current = head;
  // iterate through the nodes and check if the target value exists
  while (current) {
  // if value exist return true
  if (current.val === target) return true;  
  // reasign current to the next
  current = current.next;  
  };
  // if the value dosent exist return false
  return false;
};

// create a fucntion that accepts a head and a target number
const linkedListFind = (head: Node, target: string): boolean => {
  // Base Case: if the head is null return false
  if (!head) return false;
  // if the target is found return true
  if (head.val === target) return true;
  // return function passing in the head and target
  return linkedListFind(head.next, target);
};  
