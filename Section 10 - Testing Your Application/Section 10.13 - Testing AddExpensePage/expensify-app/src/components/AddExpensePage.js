import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';


export class AddExpensePage extends React.Component {
   onSubmit = (expense) => {
      this.props.onSubmit(expense);
      this.props.history.push('/');
   };
   render() {
      return (
         <div>
            <h1>Add Expense</h1>
            <ExpenseForm 
               onSubmit={this.onSubmit}
            />
         </div>
      );
   };
};

// const AddExpensePage = (props) => (
//    <div>
//       <h1>Add Expense</h1>
//       <ExpenseForm 
//          onSubmit={(expense) => {
//             // props.dispatch(addExpense(expense));   --> Replaced with mapDispatchToProps.
//             props.onSubmit(expense);
//             props.history.push('/');
//          }}
//       />
//    </div>
// );

//Provided as a second argument in react-redux connect component.
const mapDispatchToProps = (dispatch) => ({ 
   onSubmit: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);