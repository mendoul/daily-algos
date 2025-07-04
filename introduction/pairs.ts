// Write a function, pairs, that takes in an array as an argument. The function should return an array containing all unique pairs of elements.

// You may return the pairs in any order and the order of elements within a single pair does not matter.

// You can assume that the input array contains unique elements.

// pairs(["a", "b", "c"]); // ->
// // [
// //    ["a", "b"],
// //    ["a", "c"],
// //    ["b", "c"]
// // ]

// create function pairs that accepts an array
const pairs = <T>(arr: T[]): [T, T][] => {
  // create a result array
  const result: [T, T][] = [];
  // iterate through array
  for (let i = 0; i < arr.length; i++) {
    // iterate with nested array
    for (let j = i + 1; j < arr.length; j++) {  
      // push elements
      result.push([arr[i], arr[j]]);
    };  
  };  
  // return result array
  return result;  
};

console.log(pairs(["a", "b", "c"]))