// Write a function, reverseString, that takes in a string as an argument. 
// The function should return the string with its characters in reverse order. 
// You must do this recursively.

// reverseString("hello"); // -> "olleh"
// reverseString(""); // -> ""

// input: "hello"
// output: "olleh"

// // create a function reverseString that accepts a str, and i as default param
// const reverseString = (str: string, i: number = str.length - 1): string => {
//   // if i is 0 return ''
//   if (i < 0) return '';
//   // return str[i] + reverseString passing in string and i
//   return str[i] + reverseString(str, i - 1);
// };

// create a function reverseString that accepts a string, index, and sum
const reverseString = (str: string, i: number = str.length, sum: string = ''): string => {
  // if the index is smaller then 0 return the sum
  if (i <= 0) return sum;
  // return the function passing in string, index, sum
  return reverseString(str, --i, sum += str[i])
};
  

