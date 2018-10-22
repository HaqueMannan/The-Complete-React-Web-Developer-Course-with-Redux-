// Parent Class:
class IndecisionApp extends React.Component {
   render() {
      const title = 'Indecision';
      const subtitle = 'Put your life in the hands of a computer.'
      const options = ['Option One', 'Option Two', 'Option Three']

      return (
         <div>
            <Header title={title} subtitle={subtitle} />
            <Action />
            <Options options={options} />
            <AddOption />
         </div>
      )
   };
};


// React Components:
class Header extends React.Component {
   render() {
      console.log(this.props);         // Returns the object key:value pairs for the props data passed in.
      return (
         <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
         </div>
      )
   };
};

class Action extends React.Component {
   render() {
      return (
         <div>
            <button>What should I do?</button>
         </div>
      )
   };
};

class Options extends React.Component {
   render() {
      return (
         <div>
            {this.props.options.length}
            {
               this.props.options.map( (option) => <li key={option}>{option}</li>)
            }
            {
               this.props.options.map( (option) => <Option key={option} optionText={option} />)
            }
         </div>
      )
   };
};

class Option extends React.Component {
   render() {
      return (
         <div>{this.props.optionText}</div>
      )
   };
};

class AddOption extends React.Component {
   render() {
      return (
         <div>AddOption component here.</div>
      )
   };
};

//ReactDOM Render Function:
ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

//--------------------------------
// Challenge:
//--------------------------------
// Challenge 1:
// Setup options prop for Options component
// Render the length of the array

// Challenge 2:
// Render new <li> tag for each option. Set the key attribute, set the text.

// Challenge 3:
// Use the Option React Component to render each instance of the array and have Options reference the Option component.


//--------------------------------
// Answer:
//--------------------------------
// Challenge 1:
// In the IndecisionApp parent component render we need to add the array called options. This will allow us to have access to this.props.options.
//const options = ['Option One', 'Option Two', 'Option Three']
// We then need to return the options data within our Options Component element.
// <Options options={options} />
// In our Options React Component class we now have access to this.props.options and can call the .length operator to return the number of items within our array. We would add this to the return function.
// {this.props.options.length}

// Challenge 2:
// We would want to render in the Options React Component class using the map operator on this.props.options to loop through the array and create <li> elements with the text acting as both the key and text:
// {
//    this.props.options.map( (option) => <li key={option}>{option}</li>)
// }

// Challenge 3:
// Add to the render function the map operator to loop through the array to create instances of the Option component passing in the props data for the key and optionText.
// {
//    this.props.options.map( (option) => <Option key={option} optionText={option} />)
// }
// Key is a reserved work therefore we had to create another attribute called optionText in order for the Option Component to have access to this data.
// Update the Option React component to render the <li> elements passing in the data coming from the Options component.