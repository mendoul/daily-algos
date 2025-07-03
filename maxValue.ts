// Write a function, maxValue, that takes in array of numbers as an argument. The function should return the largest number in the array.

// Solve this without using any built-in array methods.

// You can assume that the array is non-empty.

// maxValue([4, 7, 2, 8, 10, 9]); // -> 10
// maxValue([-5, -2, -1, -11]); // -> -1
// maxValue([42]); // -> 42
// maxValue([2, 5, 1, 1, 4]); // -> 5

// input: [4, 7, 2, 8, 10, 9]
// output: 10

// create maxValue function
const maxValue = (array) => {
  // create a max variable
  let max = -Infinity;
  // iterate through array
    for (const num of array) {
    // if max is less then current replace max with current
    if (max < num) max = num;    
  };  
  // return max
  return max;
};
