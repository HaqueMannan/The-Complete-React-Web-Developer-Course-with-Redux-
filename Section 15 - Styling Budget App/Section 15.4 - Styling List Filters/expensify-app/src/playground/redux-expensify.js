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
const sortByDate = () => ({
   type: 'SORT_BY_DATE',
});
// SORT_BY_AMOUNT
const sortByAmount = () => ({
   type: 'SORT_BY_AMOUNT',
});
// SET_START_DATE
const setStartDate = (startDate) => ({
   type: 'SET_START_DATE',
   startDate
});
// SET_END_DATE
const setEndDate = (endDate) => ({
   type: 'SET_END_DATE',
   endDate
});


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
   sortBy: 'date',
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
      case 'SORT_BY_AMOUNT':
         return {
            ...state,
            sortBy: 'amount'
         }
      case 'SORT_BY_DATE':
         return {
            ...state,
            sortBy: 'date'
         }
      case 'SET_START_DATE':
         return {
            ...state,
            startDate: action.startDate
         }
      case 'SET_END_DATE':
         return {
            ...state,
            endDate: action.endDate
         }
      default:
         return state;
   }
};


// Get visible expenses:
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
   return expenses.filter((expense) => {
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
   }).sort((a, b) => {
      if (sortBy === 'date') {
         return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
         return a.amount < b.amount ? 1 : -1;
      }
   });
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
   const state = store.getState();
   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
   console.log(visibleExpenses);
});

//Dispatch an Action using the Action Generator.
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: 1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// We can now filter by text and check if the item description contains the text filter.
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// We can now sort by amount or date: 
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// We can now dispatch different startDate() and endDate() to filter the array by dates.
// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate());


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
// Timestamps (milliseconds) - these are any positive or negative integer values e.g. 3310, 10, -203 on a calculated on a metric scale of milliseconds. positive numbers go forward from that time while negative goes backwards from that time.
// 0 = 1st January 1970 00:00:00 (unix epoch) -> starting point of timestamp.
// 1000ms = 1 second.

// Array Sort Methods:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://www.w3schools.com/js/js_array_sort.asp
// https://www.w3schools.com/jsref/jsref_sort.asp