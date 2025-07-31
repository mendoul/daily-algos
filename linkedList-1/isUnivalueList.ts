// Write a function, isUnivalueList, that takes in the head of a linked list as an argument. 
// The function should return a boolean indicating whether or not the linked list contains exactly one unique value.
// You may assume that the input list is non-empty.

class Node {
  val: number
  next: null | Node;

  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(7);
const b = new Node(7);
const c = new Node(7);
a.next = b;
b.next = c;

// input: 7 -> 7 -> 7
// output: true

// // create a fuhnction that accepts a head
// const isUnivalueList = (head: Node): boolean => {
//   // create a headval and set the heads val
//   const headVal = head.val;
//   // create a current
//   let current = head.next;
//   // iterate through current and check if its value is same as headsval
//   while (current) {
//     // if not return false
//     if (current.val !== headVal) return false;
//     // reassign current
//     current = current.next;
//   }
//   // if yes return true
//   return true;
// };  

// create a function that accepts a head and heads val
const isUnivalueList = (head: Node, val: number = head.val): boolean => {
  // base case: if head is null return true
  if (!head) return true;
  //  if val is not same as heads value return false
  if (head.val !== val) return false;
  // return recursive call
  return isUnivalueList(head.next, val);
};  
