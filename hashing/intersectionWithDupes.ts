// Write a function, intersectionWithDupes, that takes in two arrays, a,b, as arguments. 
// The function should return a new array containing elements that are common to both input arrays. 
// The elements in the result should appear as many times as they occur in both input arrays.
// You can return the result in any order.

// intersectionWithDupes(["q", "b", "m", "s", "s", "s"], ["s", "m", "s"]); // -> ["m", "s", "s"]
// intersectionWithDupes(["p", "r", "r", "r"], ["r"]); // -> ["r"]
// intersectionWithDupes(["t", "v", "u"], ["g", "e", "d", "f"]); // -> [ ]

// input: ["q", "b", "m", "s", "s", "s"], ["s", "m", "s"]
// output: ["m", "s", "s"]

// create a function intersectionWithDupes that accepts 2 arr
const intersectionWithDupes = (arr1: string[], arr2: string[]): string[] => {
  // create a dupes array
  const dupes: string[] = [];
  // create a object count
  const count: Record<string, number> = {};
  // iterate through arr1 and add letters to the object count
  for (const ele of arr1) {
  count[ele] = (count[ele] || 0) + 1;
  };
  // iterate through arr2 and if the letter exists and the count is bigger then zero add to array and decrement count
  for (const ele of arr2) {
    if (count[ele]) {
      dupes.push(ele)
      count[ele]--;
    }
  };
  // return array
  return dupes;
};  
