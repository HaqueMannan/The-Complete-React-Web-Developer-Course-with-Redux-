// Old Syntax of setting up ES6 Class Properties:
class OldSyntax {
   constructor() {
      this.name = 'John';
      this.getGreeting = this.getGreeting.bind(this);
   }
   getGreeting() {
      return `Hi. My name is ${this.name}.`;
   }
};

const oldSyntax =  new OldSyntax();
const getGreeting =  oldSyntax.getGreeting;
console.log(oldSyntax);
console.log(getGreeting());


// New Babel Plugin Syntax for setting up ES6 Class Properties:
// The is no need for the constructor() function. We use key value pairs all inline to setup class properties and the Babel plugin will convert this down to ES2015 syntax code.
// The second advantage is that there is no need for the binding of properties to functions.
class NewSyntax {
   name = 'Beth'
   getGreeting = () => {
      return `Hi. My name is ${this.name}.`;
   }
};

const newSyntax = new NewSyntax();
const newGetGreeting =  newSyntax.getGreeting;
console.log(newSyntax);
console.log(newGetGreeting());