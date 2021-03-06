class Counter extends React.Component {
   constructor(props) {
      super(props);
      this.handleAddOne = this.handleAddOne.bind(this);
      this.handleMinusOne = this.handleMinusOne.bind(this);
      this.handleReset = this.handleReset.bind(this);
      this.state =  {
         count: props.count
      };
   }

   handleAddOne() {
      // this.state.count = this.state.count +1       //-> This does not render the application.
      // console.log(this.state);                     // The this.state object changes value.
      this.setState((prevState) => {
         return {
            count: prevState.count + 1
         };
      });
   }
   handleMinusOne() {
      this.setState((state) => {
         return {
            count: state.count -1
         };
      });
   }
   handleReset() {
      this.setState(() => {
         return {
            count: 0
         };
      });
   }

   render() {
      return(
         <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>reset</button>
         </div>
      )
   };
};

//DefaultProps Answer:
Counter.defaultProps = {
   count: 0
};

ReactDOM.render(<Counter />, document.getElementById('app'));


//--------------------------------
// Challenge:
//--------------------------------
// Counter Class Component - count prop - setup default prop value to 0


//--------------------------------
// Answer:
//--------------------------------
// Answer added above.