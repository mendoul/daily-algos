// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.



// Code Given: 
const createCounter = (init) => {
  // create a variable counter
  let counter = init;
  // return an inner function
  return {
    // create a increment method
    incement: () => {
      // increment counter
      return ++counter;
    },
    // create a decrement method
    decrement: () => {
      // decrement counter by 1
      return --counter;
    },
    // create a reset method
    reset: () => {
      // reset counter to init
      counter = init;
      return counter;
    }
  };
};

