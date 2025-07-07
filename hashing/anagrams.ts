// Write a function, anagrams, that takes in two strings as arguments. 
// The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

// anagrams('restful', 'fluster'); // -> true
// anagrams('cats', 'tocs'); // -> false
// anagrams('monkeyswrite', 'newyorktimes'); // -> true

// input: 'restful', 'fluster'
// output: true

// create function anagrams that accepts 2 strings
const anagrams = (str1, str2) => {
  // if the strings arent the same lengths return false
  if (str1.length !== str2.length) return false;
  // create a object count
  const count: Record<string, number> = {};
  // iterate through str1
  for (const letter of str1) {
    // if letter dosent exist create, or increment number
    count[letter] = (count[letter] || 0) + 1;
  };
  // iterate through str2
  for (const char of str2) {
    // if the letter dosent exist return false, else decrement
    if (!count[char]) return false;
    count[char]--;
  }
  // if finished iterating return true  
  return true;
};

