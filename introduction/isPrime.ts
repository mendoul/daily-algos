// Write a function, isPrime, that takes in a number as an argument. The function should return a boolean indicating whether or not the given number is prime.

// A prime number is a number that is only divisible by two distinct numbers: 1 and itself.

// For example, 7 is a prime because it is only divisible by 1 and 7. For example, 6 is not a prime because it is divisible by 1, 2, 3, and 6.

// You can assume that the input number is a positive integer.

// isPrime(1); // -> false
// isPrime(2); // -> true
// isPrime(3); // -> true
// isPrime(25); // -> false
// isPrime(31); // -> true

// input: 31
// output: true

// create a funstion isPrime that accepts a number
const isPrime = (num: number): boolean => { 
  // if number is 1 or less return false
  if (num < 1) return false;
  // iterate up untill num 
  for (let i = 2; i <= Math.sqrt(num); i++) {
  // check if it can be devisible untill its half if yes return false
  if (num % i === 0) return false;  
  };
  // return true
  return true;
};
