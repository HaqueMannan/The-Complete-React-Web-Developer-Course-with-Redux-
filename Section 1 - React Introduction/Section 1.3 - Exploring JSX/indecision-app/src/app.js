console.log('App.js is running!');

// JSX - JavaScript XML code. This syntax/code is not understood by browsers.
var template = ( 
   <div>
      <h1 id="someid">Hello React</h1>
      <p>This is a pararaph with additional info</p>
      <ol>
         <li>Item One</li>
         <li>Item Two</li>
      </ol>
   </div>
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
var templateTwo = (
   <div>
      <h1>John Doe</h1>
      <p>Age: 28</p>
      <p>Location: London</p>
   </div>
);

var appRootChallenge = document.getElementById('challenge');
ReactDOM.render(templateTwo, appRootChallenge);