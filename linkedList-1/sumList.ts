// Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. 
// The function should return the total sum of all values in the linked list.

class Node {
  val: number;
  next: null | Node;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// input: a
// output: 19

// create a function sumList that accepts a head
const sumList = (head: Node): number => {
  // create a variable sum
  let sum = 0;
  // create a variable current 
  let current = head;
  // iterate through the linked list and add val to the sum
  while(current) {
    sum += current.val;
    current = current.next;
  }
  // return the sum
  return sum;
};  

// create a function sumList that accepts a head
const sumList = (head: Node): number => {
  // Base Case: if the head is null return 0
  if (!head) return 0;
  // return heads value function passing in the head 
  return head.val + sumList(head.next);
};

// create a function that accepts a head and a default param sum
const sumList = (head: Node, sum: number = 0): number => {
  // Base Case: if the head is null return sum;
  if (!head) return sum;
  // return function passing in heads next and sum
  return sumList(head.next, sum += head.val)
};
