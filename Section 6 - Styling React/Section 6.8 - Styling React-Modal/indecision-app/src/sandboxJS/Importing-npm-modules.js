// Import NPM Modules:
// install -> import -> use

// Example: validator https://www.npmjs.com/package/validator

// Step 1 - Install Package:
// To install the npm package locally in your project run the command in the terminal while in the directory folder:
// $ npm install validator   or   $ yarn add validator

// Step 2 - Import Module:
// You will need to read the documentation to find what is exposed as a default export and named export in order to use the module functions within your application.
import validator from 'validator';

// Step 3 - Use Module:
// We now have access to everything in validator. We would need to read the documentation to understand what is accessible and how to use them for example we can use the isEmail(str [, options]) method in our app.js file:
console.log(validator.isEmail('test'));                  // Returns: False
console.log(validator.isEmail('email@email.com'));       // Returns: True


// Importing react & react-dom:
// https://www.npmjs.com/package/react
// https://www.npmjs.com/package/react-dom

// Step 1: run the terminal code:
// $ npm install react@16.0.0 react-dom@16.0.0   or   $ yarn add react@16.0.0 react-dom@16.0.0

// Step 2: import react and react-dom into our app.js file:
import React from 'react';
import ReactDOM from 'react-dom';

// Use the accessible functions/methods from the libraries:
// We can render a JSX element to the screen.
const template = <p>THIS IS JSX FROM WEBPACK</p>;
// const template = React.createElement('p', {}, 'Testing Importing Modules',);
ReactDOM.render(template, document.getElementById('app'));