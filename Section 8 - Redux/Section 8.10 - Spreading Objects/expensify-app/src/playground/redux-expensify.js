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
   id
});
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
   type: 'EDIT_EXPENSE',
   id,
   updates
});
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
   type: 'SET_TEXT_FILTER',
   text
});
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
         // ES6 spread operator on array.
         return [
            ...state,
            action.expense
         ]
      case 'REMOVE_EXPENSE':
         return state.filter(({ id }) => id !== action.id);
      case 'EDIT_EXPENSE':
         return state.map((expense) => {
            if (expense.id === action.id) {
               return {
                  ...expense,
                  ...action.updates
               };
            } else {
               return expense;
            }
         });
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
      case 'SET_TEXT_FILTER':
         return {
            ...state,
            text: action.text
         }
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
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

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
// Spreading Object Example:
//-----------------------------------------------
// const user = {
//    name: 'Jennie',
//    age: 25
// };

// console.log({
//    // age:27      // the user will override this value back to 25 of the original object.
//    ...user,
//    location: 'Philadelphia',
//    age: 27
// });


//-----------------------------------------------
// Challenge:
//-----------------------------------------------
// Setup Action Generator for setTextFilter and wire it up to the filtersReducer.
// Test with store.dispatch(setTextFilter('rent')); and store.dispatch(setTextFilter());
// This should set the text property into rent and then back to nothing.


//-----------------------------------------------
// Answer:
//-----------------------------------------------
// Answers added above.