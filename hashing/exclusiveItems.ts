// Write a function, exclusiveItems, that takes in two arrays, a,b, as arguments. 
// The function should return a new array containing elements that are in either array but not both arrays.
// You may assume that each input array does not contain duplicate elements.

// exclusiveItems([4,2,1,6], [3,6,9,2,10]); // -> [4,1,3,9,10]
// exclusiveItems([0,1,2], [10,11]); // -> [0,1,2,10,11]

// input: [4,2,1,6], [3,6,9,2,10]
// output: [4,1,3,9,10]

// create exclusiveItems function that accepts 2 arr
const exclusiveItems = (arr1: number[], arr2: number[]): number[] => {
  // create set nums passing it arr1
  const numbs: Set<number> = new Set(arr1);
  // filter and return only numbs that are no pairs, if number exist delete it, other add it
  arr2.forEach(num => numbs.has(num) ? numbs.delete(num) : numbs.add(num));
  // return as an array
  return Array.from(numbs)
};
