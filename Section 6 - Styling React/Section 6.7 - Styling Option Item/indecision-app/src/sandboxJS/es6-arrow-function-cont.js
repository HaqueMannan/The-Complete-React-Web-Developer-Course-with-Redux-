//Arrow Functions Continued

// 1) arguments object - no longer bound with arrow functions (this mean if you try to access arguments it is not going to work).

// ES2015:
const add = function(a, b) {
   console.log(arguments);
   return a + b;
};
console.log(add(1,2, 100));   //--> the 100 is accessible by arguments even though the object not defined                                      and outside the function.

// ES6:
const addArrow = (a, b) => {
   // console.log(arguments); //--> Uncaught ReferenceError: argument is not defined at…
   return a + b;
}
console.log(add(1, 2, 100));
// You no longer have access to arguments object, if you need access to this object then you should use ES2015 functions.


// 2) this keyword - no longer bound with arrow functions.

// ES2015:
const user = {
   name: 'John Doe',
   cities: ['London', 'Derby', 'Bath'],

   printPlacesLived: function () {
      console.log(this.name);
      console.log(this.cities);

      // For each takes function() as its one and only argument. This will be called one time for each item in the array with a single argument called city.
      // In the anonymous function the 'this.name' is not accessible in the anonymous function and will give a error message in the JavaScript Console of Uncaught TypeError: Cannot read property 'name' of undefined at…
      // Past workaround was to use a const variable and assign this to it like below and then use the const variable in the nested function. Arrow functions no longer requires this workaround.
      const that = this;

      this.cities.forEach(function(city){
         console.log(that.name + ' has lived in ' + city)
      });
   }
};
user.printPlacesLived();


// ES6:
const userArrow = {
   name: 'Mary Kate',
   cities: ['Nottingham', 'Coventry', 'Chester'],

   printPlacesLived: function () {
      console.log(this.name);
      console.log(this.cities);

      //Arrow functions does not need a workaround and nested function can use the parent 'this' value.
      this.cities.forEach((city) => {
         console.log(this.name + ' has lived in ' + city)
      });
   }
};
userArrow.printPlacesLived();


// You would not want to use arrow function on methods because this will give you an error message in the JavaScript console of Uncaught TypeError: Cannot read property 'cities' of undefined. This is because the arrow function on the method does not bind its own 'this' value and is no longer equal to the object, therefore, it is going to the parent scope (which is the global scope) in which case the cities is undefined:

   // const userArrowAlt = {
   //    name: 'Mary Kate',
   //    cities: ['Nottingham', 'Coventry', 'Chester'],

   //    printPlacesLived: () => {
   //       //Arrow functions does not need a workaround and nested function can use the parent 'this' value.
   //       this.cities.forEach((city) => {
   //          console.log(this.name + ' has lived in ' + city)
   //       });
   //    }
   // };
   // userArrowAlt.printPlacesLived();

// In this instance we would use the ES2015 function in order to use the this keyword.


// ES6 introduces a new method syntax which makes ES2015 functions much neater. We no longer need to use the function keyword ever again:
const userArrowAlt = {
   name: 'Ashley William',
   cities: ['Warwick', 'Liverpool', 'Blackpool'],

   printPlacesLived() {
      this.cities.forEach((city) => {
         console.log(this.name + ' has lived in ' + city)
      });
   }
};
userArrowAlt.printPlacesLived();


// Map Array method - similar to the forEach loop, however, it allows us to manipulate each item in the array and and return a new array object.
const userMap = {
   name: 'Lesley Kooper',
   cities: ['New York', 'Texas', 'Florida'],

   printPlacesLived() {
      const cityMessages = this.cities.map((city) => { 
         return this.name + ' has lived in ' + city;
      });
      return cityMessages;
   }
};
console.log(userMap.printPlacesLived());

// Concise version of the above Map method.
const userMapAlt = {
   name: 'Tom King',
   cities: ['Portsmouth', 'Blaby'],

   printPlacesLived() {
      return this.cities.map((city) => this.name + ' has lived in ' + city);
   }
};
console.log(userMapAlt.printPlacesLived());


//--------------------------------
// Challenge:
//--------------------------------
// Create an object like the above where it has an array, object, and a method using arrow functions and the map array method:
// const multiplier = {
//    // numbers - array of numbers [3, 5, 6]
//    // multiplyBy - single number (2)
//    // multiply - return a new array where the numbers have been multiplied (e.g. [3*2, 5*2, 6*2])
// };

// console.log(multiplier.multiply());


//--------------------------------
// Answer:
//--------------------------------
const multiplier = {
   numbers: [3, 5, 6],
   multiplyBy: 2,
   
   multiply() {
      return this.numbers.map((num)=> num * this.multiplyBy);
   }
};
console.log(multiplier.multiply());