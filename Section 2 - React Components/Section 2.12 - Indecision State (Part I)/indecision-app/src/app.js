// Parent Class:
class IndecisionApp extends React.Component {
   constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.state = {
         options: ['Option One', 'Option Two', 'Option Three']
      };
   }
   handleDeleteOptions() {
      this.setState(() => {
         return {
            options: []
         };
      });
   }
   handlePick() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
   }

   render() {
      const title = 'Indecision';
      const subtitle = 'Put your life in the hands of a computer.'

      return (
         <div>
            <Header title={title} subtitle={subtitle} />
            <Action hasOptions={this.state.options.length > 0}  handlePick={this.handlePick}/>
            <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} />
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
   render() {
      return (
         <div>
            <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>
               What should I do?
            </button>
         </div>
      )
   };
};

class Options extends React.Component {
   render() {
      return (
         <div>
            <button onClick={this.props.handleDeleteOptions}>Remove All</button>
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
// handlePick method -> pass down to Action and setup onClick -> bind to parent
// randomly pick an option and alert it -> reuse logic below:
   // const randomNum = Math.floor(Math.random() * app.options.length);
   // const option = app.option[randomNum];
   // alert(option);


//--------------------------------
// Answer:
//--------------------------------
//Added above.
   // constructor(props) {
   //    super(props);
   //    this.handlePick = this.handlePick.bind(this);
   // }

   // handlePick() {
   //    const randomNum = Math.floor(Math.random() * this.state.options.length);
   //    const option = this.state.options[randomNum];
   //    alert(option);
   // }

   // <Action hasOptions={this.state.options.length > 0}  handlePick={this.handlePick}/>

   // class Action extends React.Component {
   //    render() {
   //       return (
            // <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>