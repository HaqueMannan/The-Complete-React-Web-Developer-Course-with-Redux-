import { createStore } from 'redux';

// Action Generators are functions that return action objects.
// This allows us to catch typos mistakes, whereas inline action objects will not return an error if we misspelled the action incorrectly.
// We can call on the function and VSCode provides autocompletion on our function names.

// Action Generator incrementCount:
   // const incrementCount = (payload = {}) => ({ 
   //    type: 'INCREMENT',
   //    incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
   // });

// Action Generator incrementCount using Destructuring:
const incrementCount = ({ incrementBy = 1 } = {}) => ({ 
   type: 'INCREMENT',
   incrementBy                      //(same as saying incrementBy: incrementBy)
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
   type: 'DECREMENT',
   decrementBy
});

const setCount = ({ count }) => ({
   type: 'SET',
   count
});

const resetCount = () => ({
   type: 'RESET'
});

const store = createStore((state = { count: 0 }, action) => {
   switch (action.type) {
      case 'INCREMENT':
         return {
            count: state.count + action.incrementBy
         };
      case 'DECREMENT':
         return {
            count: state.count - action.decrementBy
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

// Dispatching Actions using Function calls:
store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 150 }));

// Stop the subscribe method watching for changes in the store.
unsubscribe();                // This will stop the subscribe method above from printing to the console.

store.dispatch(resetCount());

console.log(store.getState());


//---------------------------
// Challenge:
//---------------------------
// Create Action Generator for SET and RESET action objects
// setCount & resetCount
// Replace the SET and RESET action dispatch object with function calls.


//---------------------------
// Answer:
//---------------------------
// Answers added above.