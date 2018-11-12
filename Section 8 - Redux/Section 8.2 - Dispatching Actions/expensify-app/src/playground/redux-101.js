import { createStore } from 'redux';

// createStore will automatically run the first time the function is created.
const store = createStore((state = { count: 0 }, action) => {
   switch (action.type) {
      case 'INCREMENT':
         return {
            count: state.count + 1
         };
      case 'DECREMENT':
         return {
            count: state.count - 1
         };
      case 'RESET':
         return {
            count: 0
         };
      default:
         return state;
   }
});

console.log(store.getState());

// Dispatching Actions:
// Action = nothing more than an object that gets sent to the store. This object describes the type of action we would like to take.

//e.g:
// increment, decrement, reset --> we can change the store overtime by just dispatching various actions.

// I would like to increment the count:
store.dispatch({
   type: 'INCREMENT'
});

store.dispatch({
   type: 'INCREMENT'
});

// Each time we call on dispatch this will run the createStore function again but passing in the action type as the second argument.
console.log(store.getState());         // Increments by 2 because we dispatched INCREMENT twice.

// I would like to decrement the count:
store.dispatch({
   type: 'DECREMENT'
});

console.log(store.getState());         // Decrease by 1 because we dispatched DECREMENT once.


//---------------------------
// Challenge:
//---------------------------
// Create a action for RESET --> set the count equal to zero

//---------------------------
// Answer:
//---------------------------
// Part of answer also added above in the switch statement.
store.dispatch({
   type: 'RESET'
});

console.log(store.getState());         // Resets the count value to 0.