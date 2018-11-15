import { createStore, combineReducers } from 'redux';


// Setting up all these actions and handling all of them with a single reducer is not feasible.
// Action Generators Required:
// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE


// Expenses Reducer
// Use a variable to set the default state and reference it in the reducer as the default state value.
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
   switch (action.type) {
      default:
         return state;
   }
};

// Filters Reducer
// Use a variable to set the default state and reference it in the reducer as the default state value.
const filtersReducerDefaultState = {
   text: '',
   sortBy: 'amount',
   startDate: undefined,
   endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
   switch (action.type) {
      default:
         return state;
   }
};


// Store Creation:
// This will create a single store and prove that our reducer is working. However, the at the end of the day we want the array to live on the expense property.
   // const store = createStore(expensesReducer);
   // console.log(store.getState());

// Store Creation using combineReducers:
// combineReducers allows you to combine multiple reducers to create a single store. This allows us to break up our application into multiple smaller reducers as opposed to one gigantic out-of-control file.
// The first argument to createStore, we call combineReducers as a function. The combineReducer also takes in an argument of an object where we would provide the key value pairs. The key is going to be the root state name and value is going to be the reducer that is suppose to manage the root state.
// We will now see a change in the store when we console.log() - now the redux store is an object with a property of expenses which is where the expenseReducer array lives which is currently an empty object.
// Instead of putting the array in the root we are now creating an object using combineReducer and placing the array on the expenses property. This will allow us to build more complex redux stores and add more reducers using the key value pairs.
const store = createStore(
   combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
   })
);
console.log(store.getState());


// How would our data look in the store - i.e. what do we need to track in our expensify app?
const demoState = {
   expenses: [{
      id: 'svl518fdj2x4wd30meo',
      description: 'January Rent',
      note: 'This was the final payment for that address.',
      amount: 54500,
      createdAt: 0
   }],
   filters: {
      text: 'rent',
      sortBy: 'amount',     //date or amount
      startDate: undefined,
      endDate: undefined
   }
};

// We would create a single reducer for each root property in the redux store i.e. in the above example we would have 2 reducers: 1. expenses array and 2. the filters object.
// The reducers will handle the array/object as if they did not exist.
// We would take the two reducers and combine them together to create the complete store.


//-----------------------------------------------
// Challenge:
//-----------------------------------------------
// Create the Filter Reducer with default values
// text => '', sortBy => 'date', startDate => undefined, endDate => undefined
// Register it on the combineReducer
// The end result we should see another property alongside the expenses called filters. The filters property should have an object with all of the default values.


//-----------------------------------------------
// Answer:
//-----------------------------------------------
// Answer Added above.