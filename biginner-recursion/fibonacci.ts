// Write a function, fibonacci, that takes in a number argument, n, and returns the n-th number of the Fibonacci sequence.
// The 0-th number of the sequence is 0.
// The 1-st number of the sequence is 1.
// To generate further numbers of the sequence, calculate the sum of previous two numbers.
// You must solve this recursively.

// fibonacci(3); // -> 2
// fibonacci(5); // -> 5

// create a function fibbonacci that accepts a number
const fibonacci = (n: number): number => {
  // Base Case: if n < 2 return n
  if (n < 2) return n;
  // return function n - 1, function n - 2
  return fibonacci(n - 1) + fibonacci(n - 2);
};  

