console.log('App.js is running!');

// JSX - JavaScript XML code. This syntax/code is not understood by browsers.
// var template = <h1="someid">Hello React</h1>;


//JavaScript ES2015 syntax of our JSX code above which is understood by all browsers.
var template = React.createElement(
   "h1",
   { id: "someid" },
   "Hello React"
);

//Regular JavaScript to get an element by an id and assign it to a variable we can use.
var appRoot = document.getElementById('app');

//React Render function which renders the HTML element to the root/parent element. We are using the two variables above as the to arguments for the render function.
ReactDOM.render(template, appRoot);