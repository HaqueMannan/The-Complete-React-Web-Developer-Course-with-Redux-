//-----------------------------------------------
// Spread Operator:
//-----------------------------------------------
// To use the spread operator we would use the syntax of ... followed by the array/object name.
// This will create a new array/object which will replicate the original array/object properties.
// We can add new properties without changing the original array/object.


//-----------------------------------------------
// Spreading Array Example:
//-----------------------------------------------
const names = ['Allan', 'Barry'];

// Push() method;
// This will return the array length of 3, meaning that the array object has been changed.
names.push('Christine');
console.log(names);

// Concat() Method:
// Concat allows us to create a new array object and concatenate the new item onto the existing array. Note this will not change the original array which is what we want.
names.concat('Dior');            // This will return the new array with the new item.
console.log(names);              // This will return the original array of 3 items.

// Spread Operator Alternative to Concat:
// This returns a new array object with the new items the same as concat:
[...names, 'Ellen'];
['Alex', ...names, 'Ellen'];
console.log(names);              // This will return the original array of 3 items.


//-----------------------------------------------
// Spreading Object Example:
//-----------------------------------------------
const user = {
   name: 'Jennie',
   age: 25
};

// This will take the original object properties and then add new object properties and override the existing properties with the new property value.
console.log({
   ...user,
   location: 'Philadelphia',
   age: 27
});

console.log({
   age:27,
   ...user,                   // the user will override this value back to 25 of the original object.
   location: 'Philadelphia',
   age: 27
});