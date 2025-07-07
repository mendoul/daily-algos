// Write a function, mostFrequentChar, that takes in a string as an argument. 
// The function should return the most frequent character of the string. 
// If there are ties, return the character that appears earlier in the string.
// You can assume that the input string is non-empty.

// mostFrequentChar('bookeeper'); // -> 'e'
// mostFrequentChar('david'); // -> 'd'
// mostFrequentChar('abby'); // -> 'b'

// input: 'bookeeper'
// output: 'e'

// create mostFrequentChar function that accepts a string
const mostFrequentChar = (str) => {
  // create a count object
  const count = {};
  // iterate through the string
  for (const char of str) {
    // add count of chars to the object
    count[char] = (count[char] || 0) + 1;
  };
  // create largest variable, and letter
  let letter: string | null = null;
  // iterate through the object
  for (const char in count) {
    // if the char is larger then letter, set as char
    if (letter === null || count[letter] < count[char]) letter = char;  
  }
  // return largest count 
  return letter;
};  
