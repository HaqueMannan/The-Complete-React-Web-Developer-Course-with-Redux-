import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Setting up all these actions and handling all of them with a single reducer is not feasible.
// Action Generators Required:
// ADD_EXPENSE
const addExpense = (
   { 
      description = '', 
      note = '', 
      amount = 0, 
      createdAt = 0 
   } = {}
) => ({
   type: 'ADD_EXPENSE',
   expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
   }
});
// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
   type: 'REMOVE_EXPENSE',
   expense: {
      id
   }
});
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
      case 'ADD_EXPENSE':
         // return state.concat(action.expense);      // replaced by ES6 spread Operator.
         // ES6 spread operator achieves the same result as above but allows us to do more.
         return [
            ...state,
            action.expense
         ]
      case 'REMOVE_EXPENSE':
         return state.filter(({ id }) => id !== action.expense.id);
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


// Store Creation using combineReducers:
// combineReducers allows you to combine multiple reducers to create a single store. This allows us to break up our application into multiple smaller reducers as opposed to one gigantic out-of-control file.
const store = createStore(
   combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
   })
);

// Subscribe to track changes to the store printed to the JavaScript console.
store.subscribe(() => {
   console.log(store.getState());
});

//Dispatch an Action using the Action Generator.
// We get the id not only from store.getState() but also from the store.dispatch() method. We can create a variable that stores the id. We can console log the variable which will return the action object back which will give all of the properties.
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));
console.log(expenseOne, expenseTwo);

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

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


//-----------------------------------------------
// Information:
//-----------------------------------------------
// Alternative API for generating Unique ID, else these would generally come from a database.
// https://www.npmjs.com/package/uuid


//-----------------------------------------------
// Challenge:
//-----------------------------------------------
// Setup REMOVE_EXPENSE action generator - remove item by id using the filter method.
// Wire up to the reducer.
// Test with dispatch -> store.dispatch(removeExpense({ id: expenseOne.expense.id }));


//-----------------------------------------------
// Answer:
//-----------------------------------------------
// Answer Added above.
// The filter method is added to an array and we need to pass in an argument to check the array to filter out whatever matches the criteria. 
// The first parameter of the arrow function can be called anything but it is recommended to be called something meaningful. We would then want to return the array items that meet the criteria.

// Filter method example - using expense as the first argument name (but could be called anything e.g. x):
   // case 'REMOVE_EXPENSE':
   // return state.filter((expense) => {
   //    return expense.id !== action.expense.id
   // });

// step further is to destructure id from expense.
   // case 'REMOVE_EXPENSE':
   // return state.filter(({ id }) => {
   //    return id !== action.expense.id
   // });

// step further, because we are returning an expression remove the curly brackets and implicitly return the expression.
   // case 'REMOVE_EXPENSE':
   // return state.filter(({ id }) => id !== action.expense.id);