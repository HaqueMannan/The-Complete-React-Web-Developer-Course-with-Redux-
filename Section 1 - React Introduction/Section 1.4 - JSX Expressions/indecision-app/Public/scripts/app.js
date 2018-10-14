'use strict';

//JavaScript Variables:
var userName = 'John Doe';
var userAge = 28;
var userLocation = 'London';

var user = {
   name: 'Lillith Grace',
   age: 30,
   location: 'Nottingham'
};

//JSX Expression One:
var template = React.createElement(
   'div',
   null,
   React.createElement(
      'h1',
      null,
      userName.toUpperCase()
   ),
   React.createElement(
      'p',
      null,
      'Age: ',
      userAge
   ),
   React.createElement(
      'p',
      null,
      'Location: ',
      userLocation
   )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

//JSX Expression Two:
var templateTwo = React.createElement(
   'div',
   null,
   React.createElement(
      'h1',
      null,
      user.name
   ),
   React.createElement(
      'p',
      null,
      'Age: ',
      user.age
   ),
   React.createElement(
      'p',
      null,
      'Location: ',
      user.location
   )
);

var appRoot_alt = document.getElementById('app_alt');
ReactDOM.render(templateTwo, appRoot_alt);

//--------------------------------
// Challenge:
//--------------------------------
// Create app object which has two properties title & subtitle (both wll be strings).
// Use title and subtitle in the template <h1> and <p> respectively.
// Render the challengeTemplate

//--------------------------------
// Answer:
//--------------------------------
// var title = 'Title';
// var subtitle = 'Subtitle';

var app = {
   title: 'Indecision App',
   subtitle: 'Put your life in the hands of a computers.'
};

var challengeTemplate = React.createElement(
   'div',
   null,
   React.createElement(
      'h1',
      null,
      app.title
   ),
   React.createElement(
      'p',
      null,
      app.subtitle
   )
);

var appRootChallenge = document.getElementById('challenge');
ReactDOM.render(challengeTemplate, appRootChallenge);
