import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'
import thunk from 'redux-thunk';

const composeEnhancement = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//--------------------------------
// Create Redux Store:
//--------------------------------
export default () => {
   const store = createStore(
      combineReducers({
         expenses: expensesReducer,
         filters: filtersReducer
      }),
      composeEnhancement(applyMiddleware(thunk))
   );

   return store;
};