const add = (a, b) => a + b;

test('should add two numbers', () => {
   const result = add(3,4);

   // if (result !==7) {
   //    throw new Error(`You added 3 and 4. The result was ${result}. Expected 7.`)
   // }
   expect(result).toBe(7);
});


//-----------------------------
// Challenge:
//-----------------------------
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;
// Write a test case to assertion the string 'Hello John!' from the generateGreeting function using expect function and toBe method.
// Write a test case to assertion the string 'Hello Anonymous!' when nothing is passed in the generateGreeting function.

//-----------------------------
// Answer:
//-----------------------------
test('should generate greeting from name', () => {
   const result = generateGreeting('John')
   expect(result).toBe('Hello John!');
});

test('should generate greeting for no names', () => {
   const result = generateGreeting()
   expect(result).toBe('Hello Anonymous!');
});