// If Statement (function)
// Ternary Operator (Return one of two things)
// Logical And Operator (Return one thing else return nothing)


//JavaScript Variables:
var user = {
   name: 'John Doe',
   age: 28,
   location: 'London'
};

var user2 = {
   name: '',
   age: 17
};

function getLocation(location) {
   if(location) {
      return location;
   } else {
      return 'Unknown';
   }
};

//// This commented code is the same as below syntax. No need for the else statement:
// function getLocationTwo(location) {
//    if(location) {
//       return <p>Location: {user.location}</p>
//    } else {
//       return undefined;
//    }
// };

function getLocationTwo(location) {
   if(location) {
      return <p>Location: {user.location}</p>
   }
};

//JSX Expression One:
var template = (
   <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Location: {getLocation(user.location)}</p>
   </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

//JSX Expression Two:
var templateTwo = (
   <div>
      <h1>{user2.name ? user2.name : 'Anonymous'}</h1>
      {(user2.age && user2.age >=18) && <p>Age: {user2.age}</p>}
      {getLocationTwo(user2.location)}
   </div>
);

var appRoot_alt = document.getElementById('app_alt');
ReactDOM.render(templateTwo, appRoot_alt);


//--------------------------------
// Challenge:
//--------------------------------
// Only render the subtitle (and <p> tag) if the subtitle actually exists -> Logical And Operator
// Create a brand new property on app called options and make this an array with 'one' and 'two' strings.
// Render new <p> tag - if options.length() > 0 use a message "Here are your options" else use the message "No options". Place this below the subtitles <p> tag -> Ternary Operator.

//--------------------------------
// Answer:
//--------------------------------
var app = {
   title: 'Indecision App',
   subtitle: 'Put your life in the hands of a computers.',
   options: ['One', 'Two']
};

var challengeTemplate = ( 
   <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length >0 ? "Here are your options" : "No options"}</p>
   </div>
);

var appRootChallenge = document.getElementById('challenge');
ReactDOM.render(challengeTemplate, appRootChallenge);