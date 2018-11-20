import React from 'react';
import { connect } from 'react-redux';


const ExpenseList = (props) => (
   <div>
      <h1>ExpenseList</h1>
      <p>{props.name}</p>
      <p>{props.expenses.length}</p>
      <p>{props.filters.text}</p>
   </div>
);

const mapStateToProps = (state) => {
   return {
      name: 'John',
      expenses: state.expenses,
      filters: state.filters
   };
};

export default connect(mapStateToProps)(ExpenseList);


//------------------------------
// Demonstration Code:
//------------------------------
// Demonstration of what is happening above - but the above is the common pattern of exporting default.
// Also common practice to set the arrow function as a variable that is called within the connect() function.

// const ConnectedExpenseList = connect((state) => {
//    return {
//       name: 'John',
//       expenses: state.expenses
//    };
// })(ExpenseList);

// export default ConnectedExpenseList;