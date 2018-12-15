import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, removeExpense, editExpense, startSetExpense, setExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';


const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
   const expensesData = {};
   expenses.forEach(({ id, description, note, amount, createdAt }) => {
      expensesData[id] = { description, note, amount, createdAt };
   });
   database.ref('expenses').set(expensesData).then(() => done());
});

test('should setup remove expense action object', () => {
   const action = removeExpense({ id: '123abc' });
   expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
      id: '123abc'
   });
});

test('should setup edit expense action object', () => {
   const action = editExpense('123abc', { note: 'New note value' });
   expect(action).toEqual({
      type: 'EDIT_EXPENSE',
      id: '123abc',
      updates: {
         note: 'New note value'
      }
   });
});

test('should setup add expense action object with provided values', () => {
   const action = addExpense(expenses[2]);
   expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: expenses[2]
   });
});

test('should add expense to database and store', (done) => {
   const store = createMockStore({});
   const expenseData = {
      description: 'Headphones',
      amount: 5000,
      note: 'These headphones rock',
      createdAt: 1000
   };

   store.dispatch(startAddExpense(expenseData)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
         type: 'ADD_EXPENSE',
         expense: {
            id: expect.any(String),
            ...expenseData
         }
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
   }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
   });
});

test('should add expense with default to database and store', (done) => {
   const store = createMockStore({});
   const expenseDefault = {
      description: '',
      amount: 0,
      note: '',
      createdAt: 0
   };

   store.dispatch(startAddExpense({})).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
         type: 'ADD_EXPENSE',
         expense: {
            id: expect.any(String),
            ...expenseDefault
         }
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
   }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefault);
      done();
   });
});

test('should setup setExpenses action object with data', () => {
   const action = setExpenses(expenses);
   expect(action).toEqual({
      type: 'SET_EXPENSES',
      expenses
   })
});

test('should fetch the expenses from firebase', (done) => {
   const store = createMockStore({});
   store.dispatch(startSetExpense()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
         type: 'SET_EXPENSES',
         expenses
      });
      done();
   });
});

//--------------------------
// Information:
//--------------------------
// https://jestjs.io/
// {} === {} -> returns false
// [] === [] -> returns false
// Cannot use toBe to compare an object with object or array with array as it will always return false.
// If we are comparing string, numbers or booleans, we would use the Jest toBe method.
// If we are comparing objects or arrays, we would use the Jest toEqual method.
// expect.any(type) -> This method is telling Jest we are expecting something of type but don't care what the actual property is. For example we know a id is a String type but will never be able to define the dynamic value of id.