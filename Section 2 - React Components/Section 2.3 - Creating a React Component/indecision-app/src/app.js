// React Component - We are extending from simply an ES6 Class. React Component class requires the render() method defined else it wil not work.
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Indecision</h1>
            <h2>Put your life in the hands of a computer.</h2>
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
         <div>Options component here.</div>
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


const jsx = (
   <div>
      <Header />
      <Action />
      <Options />
      <AddOption />
   </div>
);

ReactDOM.render(jsx, document.getElementById('app'));

//--------------------------------
// Challenge:
//--------------------------------
// Create Two Components - these can render static text for now.
// Options -> Options component here.
// AddOption -> AddOption component here.
// Render these components in the jsx variable.

//--------------------------------
// Answer:
//--------------------------------
// Answers added above.