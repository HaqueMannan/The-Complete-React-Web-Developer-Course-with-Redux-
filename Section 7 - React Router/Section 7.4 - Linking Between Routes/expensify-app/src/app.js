import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
   <div>
      Dashboard Component
   </div>
);

const AddExpensePage = () => (
   <div>
      Add Expense Component
   </div>
);

const EditExpensePage = () => (
   <div>
      Edit Expense Component
   </div>
);

const HelpPage = () => (
   <div>
      Help Component
   </div>
);

const NotFoundPage = () => (
   <div>
      404! - <Link to="/">Go Home</Link>
   </div>
);

const Header = () => (
   <header>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
      <NavLink to="/create" activeClassName="is-active" exact={true}>Create Expense</NavLink>
      <NavLink to="/edit" activeClassName="is-active" exact={true}>Edit Expense</NavLink>
      <NavLink to="/help" activeClassName="is-active" exact={true}>Help</NavLink>
   </header>
);

const routes = (
   <BrowserRouter>
      <div>
         <Header />
         <Switch>
            <Route path='/' component={ExpenseDashboardPage} exact={true} />
            <Route path='/create' component={AddExpensePage} />
            <Route path='/edit' component={EditExpensePage} />
            <Route path='/help' component={HelpPage} />
            <Route component={NotFoundPage} />
         </Switch>
      </div>
   </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));


//-----------------------
// Challenge:
//-----------------------
// In the Header component, create 4 instances of Link to go to the Home, Credit, Edit and Help pages.

//-----------------------
// Answer:
//-----------------------
// Answers added above.
// Example answer: <Link to="/edit">Edit Expense</Link>