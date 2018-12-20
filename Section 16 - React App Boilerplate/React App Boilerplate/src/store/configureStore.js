import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';


const composeEnhancement = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//--------------------------------
// Create Redux Store:
//--------------------------------
export default () => {
   const store = createStore(
      combineReducers({
         auth: authReducer
      }),
      composeEnhancement(applyMiddleware(thunk))
   );

   return store;
};