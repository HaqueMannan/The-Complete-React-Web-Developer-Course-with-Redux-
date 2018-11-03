console.log('utils.js is running.');

const square = (x) => x * x;
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

// Two types of Exports: 
// 1. default export, and
export { square, add, subtract as default};
// Alternatively, we can add the export default inline - this must be a single expression. We would declare the variable/function above and then write the single expression as see below to declare a export default:
// export default subtract;
// To make this inline we could get rid of the subtract variable/function above and add the function to the export default below:
// export default (a, b) => a - b;


// 2. named exports
// export { square, add };
// Alternatively, we can add the export keyword inline of the variable/function, which is the same as the above statement. The export name will be the name of the variable/function.
// export const square = (x) => x * x;
// export const add = (a, b) => a + b;


//--------------------------------
// Challenge:
//--------------------------------
// Setup default export and function for isSenior(age) in person.js
// Import the default and call it within the app.js file.

//--------------------------------
// Answer:
//--------------------------------
// Answers added to the app.js and person.js files.