//---------------------------------------------
// Difference of Reassigning/Redefining between var, let & const:
//---------------------------------------------
// Issues with Var:
// Not only can we can reassign the var we can also redefine the var without any sort of error.
// You can recreate the variable without knowing that you have created the variable somewhere else in your code. Therefore, you are overriding the original variable value with the new value. This can cause hard to debug issue. 
var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);
var nameVar = '26';
console.log('nameVar', nameVar);


// ES6 let variable:
// You can reassign a let variable but cannot redefine it. Redefining declaring the let variable again.
let nameLet = 'Jen';
nameLet = 'Julie';
nameLet = 22;
console.log('nameLet', nameLet);
// let nameLet = '22';   --> Uncaught SyntaxError: Identifier ‘nameLet’ has already been declared at…


// ES6 const variable:
// With const variables you cannot redefine nor reassign the variable.
const nameConst = 'Frank';
console.log('nameConst', nameConst);
// const nameConst = 'Ben';   --> Cannot redefine the const variable. JavaScript console will throw error                                of: Uncaught SyntaxError: Identifier ‘nameLet’ has already been declared at…
// nameConst = 'Ben';         --> Cannot reassign a const variable. JavaScript console will throw error                                  of: Uncaught TypeError: Assignment to constant variable at…


//---------------------------------------------
// Difference of scoping between var, let & const:
//---------------------------------------------
//The var, let and const variables are all function scoped. This means that each variable is specific to the function that it was created inside of and cannot be accessed outside of that function.
function getPetName(){
   var petName = 'Snow';
   return petName;
};

getPetName();
// console.log(petName);       --> functioned scoped: Uncaught ReferenceError: petName is not defined at…

// If we change the above var to let and const, this will return the same Uncaught ReferenceError as the var variable as they are all function scoped.

// Note we can create a variable in the Global Scope called petName and assign the value to the function:
var petName = getPetName();
console.log(petName);


// The let and const variables are block scoped. This means that not only are they bound to functions but are also bound to code blocks. 
// A code block things like a code block for a for loop or code block for an if statement. 
// The var variable is not block scoped, meaning that the variable in the code block are accessible outside it. Example below:

var fullName = 'John Doe';

if(fullName) {
   var firstName = fullName.split(' ')[0];
   console.log(firstName);
}

console.log(firstName);       // We can access the var fullName outside the code block of the if statement.

// Change the above var to let and const and this will give you a JavaScript console error of Uncaught ReferenceError: firstName is not defined at…
// This is the same error message as the function scope.
// However we could define the let variable first and assign it to nothing and then in the if statement assign the value which we can then access outside of the block scope. For example:


const fullName2 = 'Mary Kate';
let lastName;

if(fullName2) {
   lastName = fullName2.split(' ')[1];
   console.log(lastName);
}

console.log(lastName);

// This is not possible with the const variable as you cannot assign a new value compared to the let variable.