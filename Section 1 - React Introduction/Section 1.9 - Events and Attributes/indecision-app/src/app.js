//JavaScript Variables:
const app = {
   title: 'Indecision App',
   subtitle: 'Put you life in the hands of a computer',
   option: ['One', 'Two']
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

//JSX Expression Two:
let count = 0;

const addOne = () => {
   console.log('addOne');
};

const minusOne = () => {
   console.log('minusOne');
};

const reset = () => {
   console.log('reset');
};

const templateTwo = (
   <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
   </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);


//--------------------------------
// Challenge:
//--------------------------------
// Make a button with text "-1" - setup minusOne function and register onClick handler - log "minusOne"
// Make a button with text "reset" - setup reset function and register onClick handler - log "reset"

//--------------------------------
// Answer:
//--------------------------------
// Answers below have been added above: 
   // const minusOne = () => {
   //    console.log('minusOne');
   // };

   // const reset = () => {
   //    console.log('reset');
   // };

   // <button onClick={minusOne}>-1</button>
   // <button onClick={reset}>Reset</button>