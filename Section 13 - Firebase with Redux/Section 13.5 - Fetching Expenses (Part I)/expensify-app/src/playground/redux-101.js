import { createStore } from 'redux';

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


// Reducers:
// 1. Reducers are pure functions.
// 2. Never change state or action.
const countReducer = (state = { count: 0 }, action) => {
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
   };
};

const store = createStore(countReducer);

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