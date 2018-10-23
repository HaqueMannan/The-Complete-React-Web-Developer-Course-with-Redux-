class Counter extends React.Component {
   constructor(props) {
      super(props);
      this.handleAddOne = this.handleAddOne.bind(this);
      this.handleMinusOne = this.handleMinusOne.bind(this);
      this.handleReset = this.handleReset.bind(this);
   }

   handleAddOne() {
      console.log('handleAddOne');
   }
   handleMinusOne() {
      console.log('handleMinusOne');
   }
   handleReset() {
      console.log('handleReset');
   }

   render() {
      return(
         <div>
            <h1>Count: </h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>reset</button>
         </div>
      )
   };
};

ReactDOM.render(<Counter />, document.getElementById('app'));


//--------------------------------
// Challenge:
//--------------------------------
// Create 3 Methods: handleAddOne, handleMinusOne and handleReset.
// Use alert or console.log to print the method name.
// Wire up onClick to the methods & bind in constructor.

//--------------------------------
// Answer:
//--------------------------------
// Answer added above.
// To bind to our constructor we need to use the constructor and pass in props as an argument. However, we need to use super() to manipulate the Components class and add props to the class. We can then use the .bind(this) to bind the this keyword to our event handlers.