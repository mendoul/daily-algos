// Write a function, fizzBuzz, that takes in a number n as an argument. The function should return an array containing numbers from 1 to n, replacing certain numbers according to the following rules:

// if the number is divisible by 3, make the element "fizz"
// if the number is divisible by 5, make the element "buzz"
// if the number is divisible by 3 and 5, make the element "fizzbuzz"

// fizzBuzz(11); // -> [1,2,"fizz",4,"buzz","fizz",7,8,"fizz","buzz",11]
// fizzBuzz(2); // -> [1,2]

// create a function fizzBuzz that accepts an array
const fizzBuzz = (num) => {
  // make result variable
  const result = [];
  //iterate throught the nums
  for (let i = 1; i <= num; i++) {
  // create ele variable
  let ele: number | string = ''; 
  // if num is divisble by 3 retur n fizz
  if (i % 3 === 0) ele += 'fizz';  
  // if the num is divible by 5 return buzz
  if (i % 5 === 0) ele += 'buzz'; 
  // if theres no word return i, other ele
  result.push(ele ? ele : i);
  };
  // return the result
  return result;
};

