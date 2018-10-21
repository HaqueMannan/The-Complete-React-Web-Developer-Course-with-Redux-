class Person {
   constructor(firstName = 'Anonymous', lastName, age=0) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
   }
   getGreeting(){
      const {firstName, lastName, age} = this;                       //Destructuring.
      return `Hello ${firstName} ${lastName}`;
   }
   getDescription(){
      const {firstName, lastName, age} = this;                       //Destructuring.
      return `${firstName} ${lastName} is ${age} year(s) old.`;
   }
};

class Student extends Person {
   constructor(firstName, lastName, age, subject) {
      super(firstName, lastName, age);
      this.subject = subject;
   }
   hasSubject() {
      const {firstName, lastName, age, subject} = this;              //Destructuring
      return !!subject;
   }
   getDescription() {
      const {firstName, lastName, age, subject} = this;              //Destructuring

      // return 'Override completely getDescription() parent method behaviour';

      // Modify existing method.
      let description = super.getDescription();
      if(this.hasSubject()) {
         return description += ` They are studying ${subject}.`
      }
      return description;
   }
};

const studentOne = new Student('John', 'Doe', 28, 'Economics');
console.log(studentOne);
console.log(studentOne.getGreeting());
console.log(studentOne.getDescription());
console.log(studentOne.hasSubject());


//--------------------------------
// Tips/Techniques:
//--------------------------------
// Logical Not(!) Operator:
// If we had a empty string ''                  -> this will fail an if condition and return a false value.
// If we flip it using logical not !''          -> this will return true boolean value.
// If we flip it twice using logical not !!''   -> this will return false boolean value.
// We can take a true value and convert it to true !!'John'    -> this will return true boolean value.
// If we flip undefined twice !!undefined       -> this will return false.
// Therefore - if we return !!subject this will give us true to false boolean values if a subject is passed in as an argument for our hasSubject() function.

//Destructuring allows us to takes values from the 'this' keyword and assign it to variables we can use in our function. By destructuring we no longer require to use the this keyword in the function which makes your code much cleaner and readable as well as making it easier to write.


//--------------------------------
// Challenge:
//--------------------------------
// create new class Traveller that extends from Person
// Add support for homeLocation
// Override getGreeting() method:
//    1. Hello John Doe. You are travelling from Coventry. (Prints if homeLocation).
//    2. Hello John Doe. (Prints if no homeLocation).
// Create two new Travellers and test the getGreeting() method for both instances of homeLocation.

//--------------------------------
// Answer:
//--------------------------------
class Traveller extends Person {
   constructor(firstName, lastName, age, homeLocation) {
      super(firstName, lastName, age);
      this.homeLocation = homeLocation;
   }
   getGreeting() { 
      let greeting = super.getGreeting();
      if(this.homeLocation) {
         return greeting += ` You are travelling from ${this.homeLocation}.`;
      }
      return greeting;
   }
};

const travellerOne = new Traveller('John', 'Doe', 28, 'Coventry');
console.log(travellerOne.getGreeting());

const travellerTwo = new Traveller('John', 'Doe', 28);
console.log(travellerTwo.getGreeting());

const travellerThree = new Traveller(undefined, undefined, undefined, 'Nowhere');
console.log(travellerThree.getGreeting());