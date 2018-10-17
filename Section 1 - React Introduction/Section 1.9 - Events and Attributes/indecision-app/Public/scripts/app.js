'use strict';

//JavaScript Variables:
var app = {
   title: 'Indecision App',
   subtitle: 'Put you life in the hands of a computer',
   option: ['One', 'Two']
};

//JSX Expression One:
var template = React.createElement(
   'div',
   null,
   React.createElement(
      'h1',
      null,
      app.title
   ),
   app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
   ),
   React.createElement(
      'p',
      null,
      app.option.length > 0 ? 'Here are your options' : 'No options'
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

//JSX Expression Two:
var count = 0;

var addOne = function addOne() {
   console.log('addOne');
};

var minusOne = function minusOne() {
   console.log('minusOne');
};

var reset = function reset() {
   console.log('reset');
};

var templateTwo = React.createElement(
   'div',
   null,
   React.createElement(
      'h1',
      null,
      'Count: ',
      count
   ),
   React.createElement(
      'button',
      { onClick: addOne },
      '+1'
   ),
   React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
   ),
   React.createElement(
      'button',
      { onClick: reset },
      'Reset'
   )
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);

//--------------------------------
// Challenge:
//--------------------------------
// Make a button with text "-1" - setup minusOne function and register onClick handler - log "minusOne"
// Make a button with text "reset" - setup reset function and register onClick handler - log "reset"

//--------------------------------
// Answer:
//--------------------------------
// Answers below have been added above: 
// const minusOne = () => {
//    console.log('minusOne');
// };

// const reset = () => {
//    console.log('reset');
// };

// <button onClick={minusOne}>-1</button>
// <button onClick={reset}>Reset</button>
