const address = ['123 Jarrom Street', 'Birmingham', 'West Midlands', 'B1 5ES'];

console.log(`You are in ${address[1]} ${address[2]}.`);

//-----------------------------------------------

// ES2015 variables:
// const street = address[0];
// const city = address[1];
// const county = address[2];

// console.log(`You are in ${city} ${county}.`);

//-----------------------------------------------

// ES6 Destructuring:
// Destructure ordered list of variables that resembles the array list of items.
const [street, city, county, postcode] = address;

console.log(`You are in ${city} ${county}.`);


//-----------------------------------------------

// Skipping Array Items:
// Just because you have x items in an array, does not mean you have to create x local variables.

// const [street, city, county] = address;         //--> skips anything after the third item.
// const [, city, county, postcode] = address;     //--> skips the first item in the array 
// const [, city, , postcode] = address;           //--> skips the first and third items in the array.

//-----------------------------------------------

// Default Array Values:
// const addressAlt = []
// const [, cityAlt = 'London'] = addressAlt;

// console.log(`You are in ${cityAlt}.`);


//-----------------------------------------------
// Challenge:
//-----------------------------------------------
const item = ['Coffee (hot)', '£2.00', '£2.50', '£2.75'];
// We have a structured array object items of the item, small, medium and large size price.
// Destructure this data and print the following message:
// console.log(`A medium Coffee (hot) costs £2.50.`);
// Grab first and third items using array destructuring and inject in the template literal.

//-----------------------------------------------
// Answer:
//-----------------------------------------------
const [itemName, , mediumPrice] = item
console.log(`A medium ${itemName} costs ${mediumPrice}.`);