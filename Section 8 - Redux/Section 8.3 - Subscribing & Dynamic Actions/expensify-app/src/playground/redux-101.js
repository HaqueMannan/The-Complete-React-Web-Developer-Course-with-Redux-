import { createStore } from 'redux';


const store = createStore((state = { count: 0 }, action) => {
   // Check if property exists in the dispatch - dispatch to be dynamic.
   const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
   const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;

   switch (action.type) {
      case 'INCREMENT':
         return {
            count: state.count + incrementBy
         };
      case 'DECREMENT':
         return {
            count: state.count - decrementBy
         };
      case 'RESET':
         return {
            count: 0
         };
      case 'SET':
         return {
            count: action.count     // Force actions without checking if property exists.
         };
      default:
         return state;
   }
});

// The Subscribe method will run every time there is a change in the store.
const unsubscribe = store.subscribe(() => {
   console.log(store.getState());
});

// Dispatching Actions:
store.dispatch({
   type: 'INCREMENT'
});

store.dispatch({
   type: 'INCREMENT',
   incrementBy: 5
});

// Stop the subscribe method watching for changes in the store.
unsubscribe();                // This will stop the subscribe method above from printing to the console.

store.dispatch({
   type: 'DECREMENT'
});

store.dispatch({
   type: 'RESET'
});

// We can force the value without checking for the property when the user dispatches the SET action.
store.dispatch({
   type: 'SET',
   count: 100
});

console.log(store.getState());

//---------------------------
// Challenge:
//---------------------------
// create a decrementBy property which will change the calculation above when the property is passed along with the action object in the dispatch call.

//---------------------------
// Answer:
//---------------------------
store.dispatch({
   type: 'DECREMENT',
   decrementBy: 5
});

console.log(store.getState());