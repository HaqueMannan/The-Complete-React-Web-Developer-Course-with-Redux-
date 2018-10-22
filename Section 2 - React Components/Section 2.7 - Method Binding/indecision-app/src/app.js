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
      return (
         <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
         </div>
      )
   };
};

class Action extends React.Component {
   handlePick(){
      alert('Run handlePick');
   };

   render() {
      return (
         <div>
            <button onClick={this.handlePick}>What should I do?</button>
         </div>
      )
   };
};

class Options extends React.Component {
   constructor(props) {
      super(props);
      this.handleRemoveAll = this.handleRemoveAll.bind(this);
   }

   handleRemoveAll() {
      console.log(this.props.options);
      // alert('handleRemoveAll');
   }

   render() {
      return (
         <div>
            <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>
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
   handleAddOption(e) {
      e.preventDefault();

      const option = e.target.elements.option.value.trim();

      if(option) {
         alert(option);
         e.target.elements.option.value = '';
      };
   }

   render() {
      return (
         <div>
            <form onSubmit={this.handleAddOption}>
               <input type="text" name="option"/>
               <button>Add Option</button>
            </form>
         </div>
      )
   };
};

//ReactDOM Render Function:
ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));


//--------------------------------
// Information:
//--------------------------------
// We can use the .bind() function to bind the this keyword to our handleRemoveAll() function so that we could utilise the this keyword if we ran a function example 'console.log(this.props.options);' in our handleRemoveAll():
// <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>
//However, the .bind() function can be taxing if we re-render our component every time there is a change. The best way to Bind the this method is to override the constructor.
   // constructor(props) {
   //    super(props);
   //    this.handleRemoveAll = this.handleRemoveAll.bind(this);
   // }
// This will initialise once when the Component gets first rendered to ensure we get the correct context. Therefore everytime we call the the handleRemoveAll method, this will have the correct context and we do not need to re-bind the this keyword. This is a much efficient way of handling the biding of the methods.