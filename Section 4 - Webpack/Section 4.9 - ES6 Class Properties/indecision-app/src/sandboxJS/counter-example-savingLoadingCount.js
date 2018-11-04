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

   componentDidMount() {
      try {
         const stringCount = localStorage.getItem('count');
         const count = parseInt(stringCount, 10);

         // isNAN() will return true if not a number, so using thr ! we have flipped it i.e. it will return true if it is a number.
         if(!isNaN(count)) {
            this.setState(() => ({ count }));
         }
      } catch(e) {
         // Do nothing at all
      }
   }
   componentDidUpdate(prevProps, prevState) {
      if(prevState.count !== this.state.count) {
         localStorage.setItem('count', this.state.count);
      }
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

ReactDOM.render(<Counter />, document.getElementById('app'));


//--------------------------------
// Challenge:
//--------------------------------
// Save and load from localStorage using lifecycle methods of componentDidMount and ComponentDidUpdate.


//--------------------------------
// Answer:
//--------------------------------
// Answer added above.