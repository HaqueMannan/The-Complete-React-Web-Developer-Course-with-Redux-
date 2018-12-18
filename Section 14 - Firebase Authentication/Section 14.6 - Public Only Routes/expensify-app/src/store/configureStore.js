import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'
import authReducer from '../reducers/auth';


const composeEnhancement = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//--------------------------------
// Create Redux Store:
//--------------------------------
export default () => {
   const store = createStore(
      combineReducers({
         expenses: expensesReducer,
         filters: filtersReducer,
         auth: authReducer
      }),
      composeEnhancement(applyMiddleware(thunk))
   );

   return store;
};