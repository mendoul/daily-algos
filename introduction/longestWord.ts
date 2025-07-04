// Write a function, longestWord, that takes in a sentence string as an argument. The function should return the longest word in the sentence. If there is a tie, return the word that occurs later in the sentence.

// You can assume that the sentence is non-empty.

// longestWord("what a wonderful world"); // -> 'wonderful'
// longestWord("have a nice day"); // -> 'nice'
// longestWord("the quick brown fox jumped over the lazy dog"); // -> 'jumped'
// longestWord("who did eat the ham"); // -> 'ham'
// longestWord("potato"); // -> 'potato'


// create longestWord function
const longestWord = (str: string): string => {
  // create long word variable
  let longWord: string = '';
  // split words
  const words = str.split(' ');
  // iterate through words 
  for (const word of words) {
    //  check for longest word
    if (longWord.length <= word.length) longWord = word;  
  };  
  // return long word
  return longWord;
};

// create longestWord function that accapts a string
const longestWord = (str: string): string => {
// create currentWord & LongWord variable
let currentWord: string = '';
let longWord: string = '';
// iterate through string
for (let i = 0; i < str.length; i++) {
  // add letters to currrent word
  if (str[i] !== ' ') currentWord += str[i];
  // if current letter a space or end of string 
  if (str[i] === ' ' || i === str.length - 1) { 
    // current word will evaluate to the biggest word
    if (longWord.length <= currentWord.length) longWord = currentWord;
    // reset current word
    currentWord = '';
  };
};
// return longWord
return longWord;
};
