// Write a function, longestStreak, that takes in the head of a linked list as an argument. 
// The function should return the length of the longest consecutive streak of the same value within the list.

class Node {
  val: number;
  next: null | Node;

  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(2)
const b = new Node(6)
const c = new Node(6)
const d = new Node(6)
const e = new Node(6) 

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// input: Node
// output: number of longest streak

// create a fuinction that accepts a head node
const longestStreak = (head: Node): number => {
  // create a varible previous, count, largest, current
  let 
  previous = null,
  count = 0,
  largest = 0,
  current = head;
  // iterate through the head
  while (current) {
    // if previous is same as val increment count
    if (previous === current.val) count++; 
    // if diffrent set count to 1
    else count = 1;
    // reassign previous to current val
    previous = current.val;
    // assign largest to the largest value
    largest = Math.max(largest, count);
    // reassign current to its next
    current = current.next;
  }
  // return largest
  return largest;
};

