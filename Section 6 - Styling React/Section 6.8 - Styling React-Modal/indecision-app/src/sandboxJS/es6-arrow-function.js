// Regular ES2015 Function:
const square = function (x) {
   return x * x;
};

// Regular ES2015 Function Alternative - we can name our function and call on it:
function squareAlt(x){
   return x * x;
};

console.log(square(5));
console.log(squareAlt(3));


// ES6 Arrow Function:
const squareArrow = (x) => {
   return x * x;
};

// ES6 Arrow Function Alternative where there is a single expression returned.
const squareArrowAlt = (x) => x * x;

console.log(squareArrow(8));
console.log(squareArrowAlt(4));

// We no longer require the use of the function keyword in arrow functions.
// We start the arrow function with the argument list i.e. ()
// We then follow with an arrow =>
// After the arrow we can setup the function body { block code };
// ES6 arrow functions are always anonymous. We cannot perform the ES2015 Regular Function Alternative with arrow functions. To give it a name we must always use a const or let and assign the arrow function.
// If the arrow function body returns a single expression we can write the new syntax without wrapping it within curly brackets nor use the keyword return. Return is implicitly returned.


//--------------------------------
// Challenge:
//--------------------------------
// Use arrow functions to create:
// getFirstName('Mary Kate')     -> Expect to see in console 'Mary'
// Create regular Arrow Function
// Create Arrow Function using shorthand syntax

   // const fullName = 'Mary Kate';
   // let firstName;

   // if(fullName) {
   //    firstName = fullName.split(' ')[0];
   // }

   // console.log(firstName);

//--------------------------------
// Answer:
//--------------------------------
//Answer 1
const getFirstName = (fullName) => {
   return fullName.split(' ')[0];
};

console.log(getFirstName('Mary Kate'));


// Answer 2:
const getLastName = (fullName) => fullName.split(' ')[1];
console.log(getLastName('Mary Kate'));