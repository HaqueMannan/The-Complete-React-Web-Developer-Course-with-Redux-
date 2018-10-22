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
   handleRemoveAll() {
      alert('handleRemoveAll');
   }

   render() {
      return (
         <div>
            <button onClick={this.handleRemoveAll}>Remove All</button>
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
// Challenge:
//--------------------------------
// In the Options React Component Class:
// Add Remove All button.
// Setup handleRemoveAll method -> alert some message.
// Setup onClick to fire the method.

// In the AddOptions React Component Class:
// Setup the form with text input and submit button.
// Wire up onSubmit to a handleAddOption method.
// Setup handleAddOption -> fetch the value types -> if value, then alert
// Refer to the jsx.indecisions.js and integrate the form and function in this React Component Class.


//--------------------------------
// Answer:
//--------------------------------
// Added to the Options Component class:
   // class Options extends React.Component {
   //    handleRemoveAll() {
   //       alert('handleRemoveAll');
   //    }

   //    render() {
   //       return (
   //          <div>
   //             <button onClick={this.handleRemoveAll}>Remove All</button>
   //             {
   //                this.props.options.map( (option) => <Option key={option} optionText={option} />)
   //             }
   //          </div>
   //       )
   //    };
   // };


// Added to the AddOption Component class:
   // class AddOption extends React.Component {
   //    handleAddOption(e) {
   //       e.preventDefault();
   
   //       const option = e.target.elements.option.value.trim();
   
   //       if(option) {
   //          alert(option);
   //          e.target.elements.option.value = '';
   //       };
   //    }
   
   //    render() {
   //       return (
   //          <div>
   //             <form onSubmit={this.handleAddOption}>
   //                <input type="text" name="option"/>
   //                <button>Add Option</button>
   //             </form>
   //          </div>
   //       )
   //    };
   // };