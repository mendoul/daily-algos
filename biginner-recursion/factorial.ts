// Write a function, factorial, that takes in a number n and returns the factorial of that number. 
// The factorial of n is the product of all the positive numbers less than or equal to n. You must solve this recursively.

// For example, the factorial of 6 is:
// 6 * 5 * 4 * 3 * 2 * 1 = 720

// factorial(3); // -> 6
// factorial(18); // -> 6402373705728000

// input: 3
// output: 6

// create a function factorial that acccepts a number
const factorial = (n: number): number => {
  // Base Case: if the number is 0 return 1
  if (n === 0) return 1;
  // return number * factorial passing in number decremeted by 1  
  return n * factorial(n - 1);
};

// create a functon that accepts a n and a sum
const factorial = (n: number, sum: number = 1): number => {
  // Base Case: if n is 0 return sum
  if (n === 0) return sum;
  // return factorial passing in n and sum
  return factorial(n - 1, sum *= n);
};  
