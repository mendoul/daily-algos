// Write a function sumOfLengths that takes in array of strings and returns the total length of the strings.
// You must solve this recursively.

// sumOfLengths(["goat", "cat", "purple"]); // -> 13
// sumOfLengths(["", " ", "  ", "   ", "    ", "     "]); // -> 15
// sumOfLengths(["0", "313", "1234567890"]); // -> 14 
// sumOfLengths([]); // -> 0

// input: ["goat", "cat", "purple"]
// output: 13

// create a function that accepts a arr and default param i
const sumOfLengths = (arr: string[], i: number = 0): number => {
  // Base Case: if the array is empty return 0
  if (i >= arr.length) return 0;
  // return array index length and function passing in the arr
  return arr[i].length + sumOfLengths(arr, i + 1)
};  

// create a function that acceps an array, index, and sum
const sumOfLengths = (arr: string[], i: number = 0, sum: number = 0): number => {
  // if the index is equal to the array length return 0
  if (i >= arr.length) return sum;
  // return function passing in array, i + 1, sum equal the index length
  return sumOfLengths(arr, i + 1, sum += arr[i].length)
};
  
