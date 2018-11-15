import { creatStore, combineReducers } from 'redux';

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