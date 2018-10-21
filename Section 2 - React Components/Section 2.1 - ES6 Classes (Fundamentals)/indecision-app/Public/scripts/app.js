'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
   function Person() {
      var firstName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
      var lastName = arguments[1];
      var age = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      _classCallCheck(this, Person);

      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
   }

   _createClass(Person, [{
      key: 'getGreeting',
      value: function getGreeting() {
         return 'Hello ' + this.firstName + ' ' + this.lastName;
      }
   }, {
      key: 'getGreetingAlt',
      value: function getGreetingAlt() {
         return 'Hello ' + this.firstName + ' ' + this.lastName;
      }
   }, {
      key: 'getDescription',
      value: function getDescription() {
         return this.firstName + ' is ' + this.age + ' years old.';
      }
   }]);

   return Person;
}();

;

var customer = new Person('Alex', 'Rowan', 28);
console.log(customer); //Returns Person{firstName: "Alex", lastName: "Rowan"}
console.log(customer.getGreeting()); //Returns Hello Alex Rowan
console.log(customer.getGreetingAlt()); //Returns Hello Alex Rowan
console.log(customer.getDescription()); //Returns Hello Alex is 28 years old.

var customerTwo = new Person();
console.log(customerTwo); //Returns Person{firstName: "Anonymous", lastName: undefined}
console.log(customerTwo.getDescription()); //Returns "Anonymous is 0 years old."


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
