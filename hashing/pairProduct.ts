// Write a function, pairProduct, that takes in an array and a target product as arguments. 
// The function should return an array containing a pair of indices whose elements multiply to the given target. 
// The indices returned must be unique.
// Be sure to return the indices, not the elements themselves.
// There is guaranteed to be one such pair whose product is the target.

// pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3]
// pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
// pairProduct([4, 6, 8, 2], 16); // -> [2, 3]

// input: [3, 2, 5, 4, 1], 8
// output: [1, 3]

// create a function pairProduct that accepts a array and a target number
const pairProduct = (arr: number[], target: number): number[] => { 
  // create a Map complement 
  const complement: Map<number, number> = new Map();
  // iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // if the complement number is found return the i of both numbers
    if (complement.has(arr[i])) return [complement.get(arr[i]), i];
    // add complement to number to the map with its index  
    complement.set(target / arr[i], i);
  };  
};  

