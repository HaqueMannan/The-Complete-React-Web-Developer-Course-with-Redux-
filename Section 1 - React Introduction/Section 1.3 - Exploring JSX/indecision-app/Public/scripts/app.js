'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML code. This syntax/code is not understood by browsers.
var template = React.createElement(
   'div',
   null,
   React.createElement(
      'h1',
      { id: 'someid' },
      'Hello React'
   ),
   React.createElement(
      'p',
      null,
      'This is a pararaph with additional info'
   ),
   React.createElement(
      'ol',
      null,
      React.createElement(
         'li',
         null,
         'Item One'
      ),
      React.createElement(
         'li',
         null,
         'Item Two'
      )
   )
);

//Regular JavaScript to get an element by an id and assign it to a variable we can use.
var appRoot = document.getElementById('app');

//React Render function which renders the HTML element to the root/parent element. We are using the two variables above as the to arguments for the render function.
ReactDOM.render(template, appRoot);

//---------------------------------------
//Challenge:
//---------------------------------------
// Create a templateTwo variable and assign it to a JSX expression.
// The JSX elements to create: 
// root div, 
// h1 -> text of a name e.g. John Doe
// p -> Age: followed by a number e.g. 28
// p -> Location: followed by a location e.g. London
// Render templateTwo instead of template
//---------------------------------------
//Challenge Answer
//---------------------------------------
var templateTwo = React.createElement(
   'div',
   null,
   React.createElement(
      'h1',
      null,
      'John Doe'
   ),
   React.createElement(
      'p',
      null,
      'Age: 28'
   ),
   React.createElement(
      'p',
      null,
      'Location: London'
   )
);

var appRootChallenge = document.getElementById('challenge');
ReactDOM.render(templateTwo, appRootChallenge);