'use strict';

//JavaScript Variables:
var app = {
   title: 'Indecision App',
   subtitle: 'Put you life in the hands of a computer',
   option: ['One', 'Two']
};

var user = {
   name: 'Mary',
   age: 18,
   location: 'Manchester'
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

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

//JSX Expression Tow:
function getLocation(location) {
   if (location) {
      return React.createElement(
         'p',
         null,
         'Location: ',
         location
      );
   }
}

var templateTwo = React.createElement(
   'div',
   null,
   React.createElement(
      'h1',
      null,
      user.name ? user.name : 'Anonymous'
   ),
   user.age && user.age >= 18 && React.createElement(
      'p',
      null,
      'Age: ',
      user.age
   ),
   getLocation(user.location)
);

var appRoot_alt = document.getElementById('app_alt');
ReactDOM.render(templateTwo, appRoot_alt);

//--------------------------------
// Challenge:
//--------------------------------
// Change all the var variables to const and/or let variables.

//--------------------------------
// Answer:
//--------------------------------
// All the var variables were changed to const. We did not need to reassign the variables.
// Remember the Rule:
// 'Always const first; if we need to reassign, let; var never.'
