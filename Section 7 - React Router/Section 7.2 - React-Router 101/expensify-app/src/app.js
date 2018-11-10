import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
   <div>
      Dashboard Component
   </div>
)

const AddExpensePage = () => (
   <div>
      Add Expense Component
   </div>
)

const EditExpensePage = () => (
   <div>
      Edit Expense Component
   </div>
)

const HelpPage = () => (
   <div>
      Help Component
   </div>
)

const routes = (
   <BrowserRouter>
      <div>
         <Route path='/' component={ExpenseDashboardPage} exact={true} />
         <Route path='/create' component={AddExpensePage} />
         <Route path='/edit' component={EditExpensePage} />
         <Route path='/help' component={HelpPage} />
      </div>
   </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));


//-----------------------
// Challenge:
//-----------------------
// Create routes and components for:
// 1) /edit    EditExpensePage
// 2) /help    HelpPage

//-----------------------
// Answer:
//-----------------------
// Answers added above.