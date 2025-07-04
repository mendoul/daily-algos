// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// create a function twoSum that accapts an array and a target number
// const twoSum = (array: number[], target: number): number[] | undefined => {
//   // iterate through function
//   for (let i = 0; i < array.length; i++) {
//     // nested iteration
//     for (let j = i + 1; j < array.length; j++) {
//       // if the target equals both num return the indices
//       if (array[i] + array[j] === target) return [i, j];
//     };
//   };  
// };

// create finction twoSum that accepts a array and target
const twoSum = (array: number[], target: number): undefined | number[] => {
  // create map
  const map = new Map<number, number>();
  // iterate through the array
  for (let i = 0; i < array.length; i++) {
    // create variable compliment
    const complement = target - array[i];
    // if the map has the complement return the indices
    if (map.has(complement)) return [map.get(complement)!, i];
    // if not set the map
    map.set(array[i], i);
  };  
};
console.log(twoSum([3,3], 6)); // Output: [0, 1]