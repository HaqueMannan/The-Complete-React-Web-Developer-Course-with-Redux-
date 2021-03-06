import selectExpenses from '../../selectors/expenses';
import moment from 'moment';


// Test Data
const expenses = [{
   id: '1',
   description: 'Gum',
   note: '',
   amount: 195,
   createdAt: 0
}, {
   id: '2',
   description: 'Rent',
   note: '',
   amount: 109500,
   createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
   id: '3',
   description: 'Credit Card',
   note: '',
   amount: 4500,
   createdAt: moment(0).add(4, 'days').valueOf()
}];

// Test Filter Scenarios:
test('should filter by text value', () => {
   const filters = {
      text: 'e',
      sortBy: 'date',
      startDate: undefined,
      endDate: undefined
   };
   const result = selectExpenses(expenses, filters);
   expect(result).toEqual([expenses[2], expenses[1]]);
});

test('should filter by startDate value', () => {
   const filters = {
      text: '',
      sortBy: 'date',
      startDate: moment(0),
      endDate: undefined
   };
   const result = selectExpenses(expenses, filters);
   expect(result).toEqual([expenses[2], expenses[0]]);
});


//--------------------------------
// Challenge:
//--------------------------------
// Write Test cases for:
// 1. should filter by endDate value
// 2. should sort by date
// 3. should sort by amount

//--------------------------------
// Answers:
//--------------------------------
test('should filter by endDate value', () => {
   const filters = {
      text: '',
      sortBy: 'date',
      startDate: undefined,
      endDate: moment(0).add(2, 'days')
   };
   const result = selectExpenses(expenses, filters);
   expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should sort by date', () => {
   const filters = {
      text: '',
      sortBy: 'date',
      startDate: undefined,
      endDate: undefined
   };
   const result = selectExpenses(expenses, filters);
   expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should sort by amount', () => {
   const filters = {
      text: '',
      sortBy: 'amount',
      startDate: undefined,
      endDate: undefined
   };
   const result = selectExpenses(expenses, filters);
   expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});