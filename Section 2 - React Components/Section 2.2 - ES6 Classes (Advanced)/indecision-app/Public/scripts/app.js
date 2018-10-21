'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
         var firstName = this.firstName,
             lastName = this.lastName,
             age = this.age; //Destructuring.

         return 'Hello ' + firstName + ' ' + lastName;
      }
   }, {
      key: 'getDescription',
      value: function getDescription() {
         var firstName = this.firstName,
             lastName = this.lastName,
             age = this.age; //Destructuring.

         return firstName + ' ' + lastName + ' is ' + age + ' year(s) old.';
      }
   }]);

   return Person;
}();

;

var Student = function (_Person) {
   _inherits(Student, _Person);

   function Student(firstName, lastName, age, subject) {
      _classCallCheck(this, Student);

      var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, firstName, lastName, age));

      _this.subject = subject;
      return _this;
   }

   _createClass(Student, [{
      key: 'hasSubject',
      value: function hasSubject() {
         var firstName = this.firstName,
             lastName = this.lastName,
             age = this.age,
             subject = this.subject; //Destructuring

         return !!subject;
      }
   }, {
      key: 'getDescription',
      value: function getDescription() {
         var firstName = this.firstName,
             lastName = this.lastName,
             age = this.age,
             subject = this.subject; //Destructuring

         // return 'Override completely getDescription() parent method behaviour';

         // Modify existing method.

         var description = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getDescription', this).call(this);
         if (this.hasSubject()) {
            return description += ' They are studying ' + subject + '.';
         }
         return description;
      }
   }]);

   return Student;
}(Person);

;

var studentOne = new Student('John', 'Doe', 28, 'Economics');
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

var Traveller = function (_Person2) {
   _inherits(Traveller, _Person2);

   function Traveller(firstName, lastName, age, homeLocation) {
      _classCallCheck(this, Traveller);

      var _this2 = _possibleConstructorReturn(this, (Traveller.__proto__ || Object.getPrototypeOf(Traveller)).call(this, firstName, lastName, age));

      _this2.homeLocation = homeLocation;
      return _this2;
   }

   _createClass(Traveller, [{
      key: 'getGreeting',
      value: function getGreeting() {
         var greeting = _get(Traveller.prototype.__proto__ || Object.getPrototypeOf(Traveller.prototype), 'getGreeting', this).call(this);
         if (this.homeLocation) {
            return greeting += ' You are travelling from ' + this.homeLocation + '.';
         }
         return greeting;
      }
   }]);

   return Traveller;
}(Person);

;

var travellerOne = new Traveller('John', 'Doe', 28, 'Coventry');
console.log(travellerOne.getGreeting());

var travellerTwo = new Traveller('John', 'Doe', 28);
console.log(travellerTwo.getGreeting());

var travellerThree = new Traveller(undefined, undefined, undefined, 'Nowhere');
console.log(travellerThree.getGreeting());
