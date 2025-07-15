// Write a function, palindrome, that takes in a string and returns a boolean indicating whether or not the string is the same forwards and backwards.
// You must solve this recursively.

// palindrome("kayak"); // -> true
// palindrome("boot"); // -> false
// palindrome(""); // -> true

// input: "kayak"
// output: true

// create a function palindromeRecursive that accepts a string
const palindromeRecursive = (str: string): boolean => { 
  // Base case: if the strings length is smaller then 1 return true
  if (str.length < 2) return true;
  // if the last and fisrt index isnt identical return flase
  if (str[0] !== str[str.length - 1]) return false;
  // return the function and remove the first and last letter
  return palindromeRecursive(str.slice(1, -1));
};  


// create a function palindromeRecursive that accepts a string, and 2 pointers as default params
const palindromeRecursive = (str: string, lp: number = 0, rp: number = str.length -1): boolean => {
  // Base Case: if the 2nd pointer minus the fisrt is less then 2 return true
  if (lp >= rp) return true;
  // if the 2 pointers arent identical return false
  if (str[lp] !== str[rp]) return false;
  // return the function passing in the string, and the 2 pointers
  return palindromeRecursive(str, ++lp, --rp)
};

