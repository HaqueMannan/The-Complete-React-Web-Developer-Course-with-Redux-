const person = {
   name: 'John',
   age: 28,
   location: {
      city: 'London',
      temp: 7
   }
};

console.log(`${person.name} is ${person.age}.`);

if(person.location.city && person.location.temp) {
   console.log(`Its ${person.location.temp} degrees celsius in ${person.location.city}`);
};

//-----------------------------------------------

// ES2015 variables:
// const name = person.name;
// const age = person.age;
// const city = person.location.city;
// const temp = person.location.temp;

// console.log(`${name} is ${age}.`);

// if(person.location.city && person.location.temp) {
//    console.log(`Its ${person.location.temp} degrees celsius in ${person.location.city}`);
// };

//-----------------------------------------------

// ES6 Destructuring:
const { name, age } = person
const { city, temp } = person.location;

console.log(`${name} is ${age}.`);

if(city && temp) {
   console.log(`Its ${temp} degrees celsius in ${city}`);
};


//-----------------------------------------------
// Renaming Syntax:
// Example - using 'temperature' instead of temp as the variable name.

// const { city, temp: temperature } = person.location;

// if(city && temperature) {
//    console.log(`Its ${temperature} degrees celsius in ${city}`);
// };

//-----------------------------------------------

// Default Value Syntax:
// Example - using anonymous as the value for name if the name property does not exist for the object.

// const personAlt = {
//    ageAlt: 28,
//    locationAlt: {
//       cityAlt: 'London',
//       tempAlt: 7
//    }
// };

// const { nameAlt = 'Anonymous', ageAlt } = personAlt;

// console.log(nameAlt);

//-----------------------------------------------

// Renaming & Default Value syntax combined: 
// const { name: firstName = 'Anonymous', age} = person;
// console.log(`firstName`);

//-----------------------------------------------




//-----------------------------------------------
// Challenge:
//-----------------------------------------------
const book = {
   title: 'Ego is the enemy',
   author: 'Ryan Holiday',
   publisher: {
      name: 'Penguin'
   }
};

// make the following console.log statement work:
// console.log(publisherName);               // Penguin if valid publisher.name, default: Self-Published

//-----------------------------------------------
// Answer:
//-----------------------------------------------
const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName);