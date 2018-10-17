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
   // count = count +1;    --> we could write it like this but the below shorthand is the better syntax.
   count++;
   renderCounterApp();
};

var minusOne = function minusOne() {
   count--;
   renderCounterApp();
};

var reset = function reset() {
   count = 0;
   renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
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

   ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();

// ReactDOM allows us to have all the capabilities of React. We are using Reacts virtualDOM algorithm to efficiently render and re-render our application so that only the changes made to our application JSX elements are being re-rendered only. This means we can re-render our application to update our app without worrying about slowing down the user or wasting a ton of resources and creating a laggy and buggy application instead.
// The virtualDOM runs behind the scenes and uses JavaScript to calculates the minimum number of changes in a case using an algorithm. It is more clever than blindly re-rendering.
// Remember that what comes back from react.createElement is an object that represents our entire JSX tree and we can use algorithms to compare the two objects. This is exactly what React is doing.


//--------------------------------
// Challenge:
//--------------------------------
// subtract 1 from count and re-render.
// set count to 0 and re-render.

//--------------------------------
// Answer:
//--------------------------------
// Answers are added above:
// const minusOne = () => {
//    count--;
//    renderCounterApp();
// };

// const reset = () => {
//    count = 0;
//    renderCounterApp();
// };
