console.log('person.js is running.');

const isAdult = (age) => age >= 16;
const canSmoke = (age) => age >= 18;
const isSenior = (age) => age >= 60;

export { isAdult, canSmoke, isSenior as default };

// Alternative:
// export default isSenior;
// export default (age) => age >= 60;


// Alternative named export:
// export const isAdult = (age) => age >= 16;
// export const canSmoke = (age) => age >= 18;