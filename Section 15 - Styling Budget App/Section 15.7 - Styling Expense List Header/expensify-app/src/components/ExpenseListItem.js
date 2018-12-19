import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

// Format GB Local.
require('numeral/locales/en-gb');
numeral.locale('en-gb');

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
   <Link to={`/edit/${id}`}>
      <div>
         <h3>{description}</h3>
         <span>{moment(createdAt).format('Do MMMM YYYY')}</span>
      </div>
      <h3><p>{numeral(amount / 100).format('$0,0.00')}</p></h3>
   </Link>
);

export default ExpenseListItem;