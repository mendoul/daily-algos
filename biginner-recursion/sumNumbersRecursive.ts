// Watch the Approach video first!

// Write a function sumNumbersRecursive that takes in an array of numbers and returns the sum of all the numbers in the array. 
// All elements will be integers. Solve this recursively.

// sumNumbersRecursive([5, 2, 9, 10]); // -> 26
// sumNumbersRecursive([1, -1, 1, -1, 1, -1, 1]); // -> 1
// sumNumbersRecursive([1000, 0, 0, 0, 0, 0, 1]); // -> 1001

// input: [5, 2, 9, 10]
// output: 26

// create a function sumNumbersRecursive that accepts an array
const sumNumbersRecursive = (arr: number[]): number => { 
  // Base Case: if array is empty return
  if (arr.length <= 0) return 0;
  // return array index[0] + the function removing the current index
  return arr[0] + sumNumbersRecursive(arr.slice(1));
};

// create a function sumNumbersRecursive that takes in a arr and sum
const sumNumbersRecursive = (arr: number[], sum: number = 0): number => {
  // Base Case: if the array is empty return sum
  if (arr.length <= 0) return sum;
  // return function passing in array and sum
  return sumNumbersRecursive(arr.slice(1), sum += arr[0]);
};

console.log(sumNumbersRecursive([5, 2, 9, 10]))