import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


export default class ExpenseForm extends React.Component {
   constructor(props){
      super(props);

      this.state = {
         description: props.expense ? props.expense.description : '',
         note: props.expense ? props.expense.note : '',
         amount: props.expense ? (props.expense.amount / 100).toString() : '',
         createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
         calendarFocused: false,
         error: ''
      };
   };

   onDescriptionChange = (e) => {
      const description = e.target.value;
      this.setState(() => ({ description }));
   };
   onNoteChange = (e) => {
      const note = e.target.value;
      this.setState(() => ({ note }));
   };
   onAmountChange = (e) => {
      const amount = e.target.value;
      if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
         this.setState(() => ({ amount }));
      }
   };
   onDateChange = (createdAt) => {
      if (createdAt) {
         this.setState(() => ({ createdAt }));
      }
   };
   onFocusChange = ({ focused }) => {
      this.setState(() => ({ calendarFocused: focused }));
   };
   onSubmit = (e) => {
      e.preventDefault();

      if (!this.state.description || !this.state.amount) {
         this.setState(() => ({ error: 'Please provide description and/or amount.' }));
      } else {
         this.setState(() => ({ error: '' }));
         this.props.onSubmit({
            description: this.state.description,
            amount: parseFloat(this.state.amount, 10) * 100,
            createdAt: this.state.createdAt.valueOf(),
            note: this.state.note
         });
      };
   };

   render(){
      return (
         <form className="form" onSubmit={this.onSubmit}>
            {this.state.error && <p className="form__error">{this.state.error}</p>}
            <input
               className="text-input"
               type="text"
               placeholder="Description"
               autoFocus
               value={this.state.description}
               onChange={this.onDescriptionChange}
            />
            <input
               className="text-input"
               type="text"
               placeholder="Amount"
               value={this.state.amount}
               onChange={this.onAmountChange}
            />
            <SingleDatePicker
               date={this.state.createdAt}
               onDateChange={this.onDateChange}
               focused={this.state.calendarFocused}
               onFocusChange={this.onFocusChange}
               displayFormat="DD/MM/YYYY"
               numberOfMonths={1}
               isOutsideRange={() => false}
            />
            <textarea
               className="text-area"
               placeholder="Add a note for your expense (optional)."
               value={this.state.note}
               onChange={this.onNoteChange}
            ></textarea>
            <div>
               <button className="button">Save Expense</button>
            </div>
         </form>
      )
   };
};


//------------------------
// Information:
//------------------------
// https://regex101.com/
// https://momentjs.com/
// https://github.com/airbnb/react-dates
// http://airbnb.io/react-dates/?selectedKind=DateRangePicker%20%28DRP%29&selectedStory=default&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel
// react-dates has a dependency on react-addons-shallow-compare@15.6.0, this library is no longer supported but is relied on by react-dates. Until react-dates change their code this should be installed as a dependency.


//------------------------
// DATES API:
//------------------------
// The default JavaScript API for dates - not the best:
// const date = new Date();

// Moment API for dates - the gold standard:
// const now = moment();
// console.log(now.format('Do MMM YYYY'));