//JavaScript Variables:
const app = {
   title: 'Indecision App',
   subtitle: 'Put you life in the hands of a computer',
   option: ['One', 'Two']
};

const user = {
   name: 'Mary',
   age: 18,
   location: 'Manchester' 
};


//JSX Expression One:
const template = (
   <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.option.length >0 ? 'Here are your options' : 'No options'}</p>
      <ol>
         <li>Item One</li>
         <li>Item Two</li>
      </ol>
   </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);


//JSX Expression Tow:
function getLocation(location){
   if(location) {
      return <p>Location: {location}</p>;
   }
}

const templateTwo = (
   <div>
      <h1>{user.name ? user.name : 'Anonymous'}</h1>
      {(user.age && user.age >=18) && <p>Age: {user.age}</p>}
      {getLocation(user.location)}
   </div>
);

const appRoot_alt = document.getElementById('app_alt');
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
// 'Const first; if we need to reassign, let ... var never!'