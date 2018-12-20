import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

// Format GB Local.
require('numeral/locales/en-gb');
numeral.locale('en-gb');

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
   <Link className="list-item" to={`/edit/${id}`}>
      <div>
         <h3 className="list-item__title">{description}</h3>
         <span className="list-item__sub-title">{moment(createdAt).format('Do MMMM YYYY')}</span>
      </div>
      <h3 className="list-item__data"><p>{numeral(amount / 100).format('$0,0.00')}</p></h3>
   </Link>
);

export default ExpenseListItem;