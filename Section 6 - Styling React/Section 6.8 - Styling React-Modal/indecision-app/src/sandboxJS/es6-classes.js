class Person {
   constructor(firstName = 'Anonymous', lastName, age=0) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
   };
   getGreeting() {
      return 'Hello ' + this.firstName + ' ' + this.lastName;
   }
   getGreetingAlt(){
      return `Hello ${this.firstName} ${this.lastName}`;
   }
   getDescription(){
      return `${this.firstName} is ${this.age} years old.`
   }
};

const customer = new Person('Alex', 'Rowan', 28);
console.log(customer);                       //Returns Person{firstName: "Alex", lastName: "Rowan"}
console.log(customer.getGreeting());         //Returns Hello Alex Rowan
console.log(customer.getGreetingAlt());      //Returns Hello Alex Rowan
console.log(customer.getDescription());      //Returns Hello Alex is 28 years old.

const customerTwo = new Person();
console.log(customerTwo);                    //Returns Person{firstName: "Anonymous", lastName: undefined}
console.log(customerTwo.getDescription());   //Returns "Anonymous is 0 years old."


//--------------------------------
// Challenge:
//--------------------------------
// Setup constructor to take in age (default to 0)
// Setup method getDescription() -> return string of example "John Doe is 28 years old."


//--------------------------------
// Answer:
//--------------------------------
// constructor(name, age = 0) {
//    this.name = name;
//    this.age = age;
// }
// getDescription() {
//    return `${this.name} is ${age} years old.`
// }