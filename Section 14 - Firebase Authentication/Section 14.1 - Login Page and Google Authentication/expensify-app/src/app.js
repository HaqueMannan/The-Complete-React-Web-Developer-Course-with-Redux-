import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';


// create Redux Store:
const store = configureStore();

const jsx = (
   <Provider store={store}>
      <AppRouter />
   </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpense()).then(() => {
   ReactDOM.render(jsx, document.getElementById('app'));
});

// Print to console when someone logs in or out of firebase. Testing purposes if Google Auth working.
firebase.auth().onAuthStateChanged((user) => {
   if (user) {
      console.log('Log in')
   } else {
      console.log('Log out')
   }
});