class Counter extends React.Component {
   constructor(props) {
      super(props);
      this.handleAddOne = this.handleAddOne.bind(this);
      this.handleMinusOne = this.handleMinusOne.bind(this);
      this.handleReset = this.handleReset.bind(this);
      this.state =  {
         count: 0
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

//Test it Out: Comment out the below two setState methods and uncomment the Above two setState methods. 
   handleReset() {
      // This performs correctly i.e. Returns to 0 and then +1:
      // this.setState(() => {
      //    return {
      //       count: 0
      //    };
      // });
      // this.setState((prevState) => {
      //    return {
      //       count: prevState.count + 1
      //    };
      // });


      //This performs incorrectly i.e. it adds +1 to the outdated value and does not set the state to 0 + 1
      // (This will soon be deprecated in future versions of React).
      this.setState({
            count: 0
      });
      this.setState({
            count: this.state.count + 1
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

ReactDOM.render(<Counter />, document.getElementById('app'));


//--------------------------------
// Challenge:
//--------------------------------
// Call this.setState() and decrement the count by 1


//--------------------------------
// Answer:
//--------------------------------
// handleMinusOne() {
//    this.setState((prevState) => {
//       return {
//          count: prevState.count -1
//       };
//    });
// }