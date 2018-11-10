//JSX Expression:
let count = 0;

const addOne = () => {
   // count = count +1;    --> we could write it like this but the below shorthand is the better syntax.
   count++;
   renderCounterApp();
};

const minusOne = () => {
   count--;
   renderCounterApp();
};

const reset = () => {
   count = 0;
   renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
   const template = (
      <div>
         <h1>Count: {count}</h1>
         <button onClick={addOne}>+1</button>
         <button onClick={minusOne}>-1</button>
         <button onClick={reset}>Reset</button>
      </div>
   );

   ReactDOM.render(template, appRoot);
};

renderCounterApp();

// ReactDOM allows us to have all the capabilities of React. We are using Reacts virtualDOM algorithm to efficiently render and re-render our application so that only the changes made to our application JSX elements are being re-rendered only. This means we can re-render our application to update our app without worrying about slowing down the user or wasting a ton of resources and creating a laggy and buggy application instead.
// The virtualDOM runs behind the scenes and uses JavaScript to calculates the minimum number of changes in a case using an algorithm. It is more clever than blindly re-rendering.
// Remember that what comes back from react.createElement is an object that represents our entire JSX tree and we can use algorithms to compare the two objects. This is exactly what React is doing.