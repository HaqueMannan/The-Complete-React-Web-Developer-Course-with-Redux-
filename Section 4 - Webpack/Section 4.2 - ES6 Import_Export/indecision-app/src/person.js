console.log('person.js is running.');

const isAdult = (age) => age >= 16;
const canSmoke = (age) => age >= 18;

export { isAdult, canSmoke };


// Alternative named export:
// export const isAdult = (age) => age >= 16;
// export const canSmoke = (age) => age >= 18;