'use strict';

//JavaScript Variables:
var app = {
   title: 'Indecision App',
   subtitle: 'Put you life in the hands of a computer',
   options: []
};

// Form event handler functions:
var onFormSubmit = function onFormSubmit(e) {
   e.preventDefault();

   var option = e.target.elements.option.value;

   if (option) {
      app.options.push(option); //pushes the value to our options array above.
      e.target.elements.option.value = '';

      render();
   }
};

var removeAll = function removeAll() {
   app.options = [];
   render();
};

var makeDecision = function makeDecision() {
   var randomNum = Math.floor(Math.random() * app.options.length);
   var selectedOption = app.options[randomNum];
   console.log(selectedOption);
};

var appRoot = document.getElementById('app');

// Render Application:
var render = function render() {
   //JSX Expression:
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
         app.options.length > 0 ? 'Here are your options' : 'No options'
      ),
      React.createElement(
         'button',
         { disabled: app.options.length === 0, onClick: makeDecision },
         'What should I do?'
      ),
      React.createElement(
         'button',
         { onClick: removeAll },
         'Remove All'
      ),
      React.createElement(
         'ol',
         null,
         app.options.map(function (option) {
            return React.createElement(
               'li',
               { key: option },
               option
            );
         })
      ),
      React.createElement(
         'form',
         { onSubmit: onFormSubmit },
         React.createElement('input', { type: 'text', name: 'option' }),
         React.createElement(
            'button',
            null,
            'Add Option'
         )
      )
   );

   ReactDOM.render(template, appRoot);
};

render();

//--------------------------------
// Challenge:
//--------------------------------


//--------------------------------
// Answer:
//--------------------------------
