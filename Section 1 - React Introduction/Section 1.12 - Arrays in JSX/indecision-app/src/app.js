//JavaScript Variables:
const app = {
   title: 'Indecision App',
   subtitle: 'Put you life in the hands of a computer',
   options: []
};

// Form event handler functions:
const onFormSubmit = (e) => {
   e.preventDefault();

   const option = e.target.elements.option.value;

   if(option) {
      app.options.push(option);  //pushes the value to our options array above.
      e.target.elements.option.value = '';

      render();
   }
};

const removeAll = () => {
   app.options = [];
   render();
};

const appRoot = document.getElementById('app');
// const numbers = [55, 101, 1000];


// Render Application:
const render = () => {
   //JSX Expression:
   const template = (
      <div>
         <h1>{app.title}</h1>
         {app.subtitle && <p>{app.subtitle}</p>}
         <p>{app.options.length >0 ? 'Here are your options' : 'No options'}</p>
         <p>{app.options.length}</p>
         <button onClick={removeAll}>Remove All</button>

         {/* Array Expressions Example:
            {
               [98, 99, 100, 'John Doe', null, undefined, true, false]
            }
            {
               [<p key='1'>a</p>, <p key='2'>b</p>, <p key='3'>c</p>]
            }
            {
               numbers.map((number) => {
                  return <p key={number}>Number: {number}</p>
               })
            }
         */}

         <ol>
            {
               app.options.map( (option) => <li key={option}>{option}</li>)
            }
         </ol>
         <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
         </form>
      </div>
   );

   ReactDOM.render(template, appRoot);
};

render();


//--------------------------------
// Challenge:
//--------------------------------
// Map over app.options getting back an array of list item (<li>)
// Set key prop and text for each item


//--------------------------------
// Answer:
//--------------------------------
// <ol>
//    {
//       app.options.map( (option) => {
//          return <li key={option}>{option}</li>;
//       })
//    }
// </ol>

// alternatively:
// <ol>
//    {
//       app.options.map( (option) => <li key={option}>{option}</li>)
//    }
// </ol>