console.log('utils.js is running.');

const square = (x) => x * x;
const add = (a, b) => a + b;

// Two types of Exports: 
// 1. default export, and

// 2. named exports
export { square, add };
// Alternatively we can add the export keyword inline of the variable/function, which is the same as the above statement. The export name will be the name of the variable/function.
// export const square = (x) => x * x;
// export const add = (a, b) => a + b;


//--------------------------------
// Challenge:
//--------------------------------
// create a person.js file that sits alongside the app.js file.
// person.js export 2 named exports:
//    isAdult(age) - true if adult, otherwise false.
//    canSmoke(age) - true if 18 and over, otherwise false.
// import isAdult and canSmoke in app.js
// use both functions, printing results to the console.


//--------------------------------
// Answer:
//--------------------------------
// Answers added to person.js file and app.js