// Write a function, intersection, that takes in two arrays, a,b, as arguments. 
// The function should return a new array containing elements that are in both of the two arrays.
// You may assume that each input array does not contain duplicate elements.

// intersection([4,2,1,6], [3,6,9,2,10]); // -> [2,6]
// intersection([2,4,6], [4,2]); // -> [2,4]
// intersection([0,1,2], [10,11]); // -> []

// input: [4,2,1,6], [3,6,9,2,10]
// output: [2,6]

// create a function the accepts 2 arrays
const intersection = (arr1: number[], arr2: number[]) => {
  // create a set nums add arr1
  const numbs: Set<number> = new Set(arr1);
  // itererate through the second array and return pairs
  return arr2.filter(num => numbs.has(num));
};

