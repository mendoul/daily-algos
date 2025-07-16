// Write a function, linkedListValues, that takes in the head of a linked list as an argument. 
// The function should return an array containing all values of the nodes in the linked list.

class Node {
  val: string;
  next: null | Node;

  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")

a.next = b;
b.next = c;
c.next = d;

// input: a 
// output: [ 'a', 'b', 'c', 'd' ]

// create a function linkedListValues that accepts a head node
const linkedListValues = (head: Node): string[] => {
  // create an array values
  const values = [];
  // create a variable current
  let current = head;
  // iterate through the linked List and add values to the array
  while (current) {
    values.push(current.val);
    current = current.next
  };
  // return the array
  return values;
};

// create a function linkedListValues that accepts a head, and a values array as a default param
const linkedListValues = (head: Node, values: string[] = []): string[] => {
  // Base Case: if the head is null return
  if (!head) return;
  // push in the value to the array
  values.push(head.val);
  // function passing in the heads next
  linkedListValues(head.next, values);
  // return the array
  return values;
}; 

// create a function linkedListValues that accepts a head, and a values array as a default param
const linkedListValues = (head: Node, values: string[] = []): string[] => {
  // base case: if the val is null return the array
  if (!head) return values;
  // add the value to the array
  values.push(head.val);
  // return the function 
  return linkedListValues(head.next, values);
};

