// Write a function, pairSum, that takes in an array and a target sum as arguments. 
// The function should return an array containing a pair of indices whose elements sum to the given target. 
// The indices returned must be unique.
// Be sure to return the indices, not the elements themselves.
// There is guaranteed to be one such pair that sums to the target.

// pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]
// pairSum([4, 7, 9, 2, 5, 1], 5); // -> [0, 5]
// pairSum([9, 9], 18); // -> [0, 1]

// create a function pairSum that accepts an array and a target
const pairSum = (arr: number[], target: number): [number, number] => {
  // create a map remiander
  const remainder: Map<number, number> = new Map();
  // iterate through our array
  for (let i = 0; i < arr.length; i++) {
    // check if theres a remainder, if yes return the indices
    if (remainder.has(arr[i])) return [remainder.get(arr[i]), i]; 
    // if add the sum and indice to the map
    remainder.set(target - arr[i], i);
  };  
};  

console.log(pairSum([9, 9, 5, 4, 1], 18))