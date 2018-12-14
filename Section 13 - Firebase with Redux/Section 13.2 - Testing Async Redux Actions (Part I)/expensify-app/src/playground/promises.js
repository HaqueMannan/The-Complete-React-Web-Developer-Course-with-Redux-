//------------------------------------
// Example of creating a new Promises
//------------------------------------
// We are going to use setTimeout to simulate a arbitrary delay similar to real work applications when they make a fetch request etc.
const promise = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve('This is the resolved data');
      reject('Something went wrong!')
   }, 5000)
});

console.log('Before');

// The .then() allows us to register a callback and the callback fires when and if the promise resolves.
// We can have access to any data that was passed into the resolve above.
promise.then((data) => {
   console.log('1', data);
}).catch((error) => {
   console.log('error: ', error);
});

// We can run as many promises as we would like. 
// promise.then((data) => {
//    console.log('2', data);
// });

console.log('After');

//------------------------------------
// What happens?
//------------------------------------
// The first console.log runs and prints 'Before' to the console.
// We then have the promise which we attached something that basically says when the promise completed go ahead and run the function. It is not going to sit here and wait for the promise to complete; however, we have already registered the callback. This is going to allow the program to move on.
// The third console.log runs and prints 'After' to the console.
// After 5 seconds, when the promise does resolve, the callback gets fired and second console.log with the revolve data ('This is the resolved data') is printed to the JavaScript console.
// We can run as many promises as we would like. In the above example we could have two promises running - uncomment to see what happens (both will resolve after 5 seconds).

//------------------------------------
// Resolve & Reject Arguments:
//------------------------------------
// A promise can either be resolved or rejected.
// You cannot resolve and reject a promise.
// You can only resolve or reject a single time.
// You can only pass a single argument to resolve or reject.

// const promise = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve({
//          name: 'John Doe',
//          age: 28,
//          message: 'This is the resolved data'
//       });
//       resolve('This is another resolved data', 'other');
//    }, 5000)
// });

// In the above example, this will ignore the second resolve because a promise can only be resolved once. The promise API was not built to run multiple resolves and therefore there is no point in writing a second resolve as it will be completely ignored. 
// Also you cannot pass in multiple arguments for the resolve or reject. If you need more than one pieces of information then resolve using an object which can have as many properties as you like. You can then have access to the data within the object.

//------------------------------------
// .then() and .catch():
//------------------------------------
// Resolve = the thing we expected to happen has happened e.g. start writing data, the data has written or start fetching the weather data from an API, the weather was fetched.
// Reject = When things go wrong with our promise callback and it does not get resolved. This will callback the reject.
// The reject will return back a JavaScript error along with our string. If we commented out the resolve within the first example and observed the results after 5 seconds in the JavaScript console we should see a JavaScript error 'Uncaught (in promise) Something went wrong!' within the console. To correct this JavaScript error we would need to use the .catch() method on our promise.

// We use the .then() method on our promises for the resolve. This takes in a single function that gets fired when the promise resolves. We can pass in the single argument for the resolve data.
// We use the .catch() method on our promises for the reject. This is very similar to .then() i.e. it gets called with a single function that fires when the promise rejects. Again, we can pass in a single argument for the reject data.
// We can call this anything we like but a suitable argument name would be data and error.
// When we get a reject, we can do something with this error such as try the request again or print the error message to the user in the browser etc.
// The .catch() resolves the JavaScript error in the console but continue to print the string for the error to notify the user.

//------------------------------------
// Alternative Promise Syntax:
//------------------------------------
// The .then() can actually take in two arguments. However, it treats the second arrow function argument as the catch handler for the reject, see example below:
// This syntax may be a little more confusing compared the the explicit .then() and .catch() syntax/semantics which is alot easier to read compared to the below.

// promise.then((data) => {
//    console.log('1', data);
// }, (error) => {
//    console.log('error: ', error);
// });

//------------------------------------
// Promise Chaining:
//------------------------------------
// We can use a technique called promise chaining which allows oyu to run multiple .then() methods chaining onto a promise. This will continue to run as long as the promise resolves or rejects once.
// The second .then() method receives no data unless we return something from the first .then(data) method in which case we can then access in the second .then() method call.

// promise.then((data) => {
//    console.log('1', data);
//    return 'data from promise 1'
// }).then((str) => {
//    console.log('promise chaining', str);
// }).catch((error) => {
//    console.log('error: ', error);
// });

//------------------------------------
// Important Note:
//------------------------------------
// Most of the time the promises are going to be created for us within the library that we use (e.g. firebase) and therefore we would not create the new Promise. We would use a lot of promises that get generated from method calls such as the .set() method.
// We are more likely to use the .then() and .catch() handlers to the promise i.e. things to run when the promise either resolves or rejects.