// Write a function, allUnique, that takes in an array. 
// The function should return a boolean indicating whether or not the array contains unique items.

// allUnique(["q", "r", "s", "a"]); // -> true
// allUnique(["q", "r", "s", "a", "r", "z"]); // -> false
// allUnique(["red", "blue", "yellow", "green", "orange"]); // -> true
// allUnique(["cat", "cat", "dog"]); // -> false

// input: ["q", "r", "s", "a"]
// output: true

// create allUnique function that accepts an array
const allUnique = (arr: string[]): boolean => {
  // create a set unique 
  const unique: Set<string> = new Set(arr);
  // return if the lemgth is the same
  return unique.size === arr.length;
};  
