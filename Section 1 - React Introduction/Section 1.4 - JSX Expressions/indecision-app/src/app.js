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
var template = (
   <div>
      <h1>{userName.toUpperCase()}</h1>
      <p>Age: {userAge}</p>
      <p>Location: {userLocation}</p>
   </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

//JSX Expression Two:
var templateTwo = (
   <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Location: {user.location}</p>
   </div>
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


var challengeTemplate = ( 
   <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle}</p>
   </div>
);

var appRootChallenge = document.getElementById('challenge');
ReactDOM.render(challengeTemplate, appRootChallenge);