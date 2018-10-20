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
         'p',
         null,
         app.options.length
      ),
      React.createElement(
         'button',
         { onClick: removeAll },
         'Remove All'
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
// Create a render function that renders the new JSX
// Call it initially to call it right away
// Call it after the options array is added to using the form submission.
// End results should be to see the number increment on our application when we submit new option to our options array when using the form. If the form is left empty we should not see the the number increase.


//--------------------------------
// Answer:
//--------------------------------
// Answers above.

// 1) Render Application function: 
// const render = () => {
//    //JSX Expression:
//    const template = (
//       <div>
//          <h1>{app.title}</h1>
//          {app.subtitle && <p>{app.subtitle}</p>}
//          <p>{app.options.length >0 ? 'Here are your options' : 'No options'}</p>
//          <p>{app.options.length}</p>
//          <ol>
//             <li>Item One</li>
//             <li>Item Two</li>
//          </ol>
//          <form onSubmit={onFormSubmit}>
//             <input type="text" name="option"/>
//             <button>Add Option</button>
//          </form>
//       </div>
//    );

//    ReactDOM.render(template, appRoot);
// };

// 2) Initial Render:
// render();

// 3) Undated onFormSubmit() function to add to the if statement the renderApp function:
// if(option) {
//    app.options.push(option);  //pushes the value to our options array above.
//    e.target.elements.option.value = '';

//    render();
// }


//--------------------------------
// Challenge 2:
//--------------------------------
// Create 'Remove All' button above list.
// on click -> wipe the array -> re-render the application.

//--------------------------------
// Answer:
//--------------------------------
// <button onClick={removeAll}>Remove All</button>

// const removeAll = () => {
//    app.options = [];
//    render();
// };
