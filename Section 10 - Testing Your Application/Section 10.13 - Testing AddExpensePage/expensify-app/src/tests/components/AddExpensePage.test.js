import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';


let onSubmit, history, wrapper;
beforeEach(() => {
   onSubmit = jest.fn();
   history = { push: jest.fn() };
   wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
});

test('should render AddExpensePage correctly', () => {
   expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
   wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
   expect(history.push).toHaveBeenLastCalledWith('/');
   expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
});


// -------------------------
// JEST LifeCycle Methods:
// -------------------------
// As you can see below, we spend a lot of time setting up the test case before making our assertions. We can use Jest LifeCycle methods to remove repeat codes. The beforeEach() allows us to create the Jest functions which will be called a fresh before each test case. This allows us to reuse our test spies in each of our test cases without repeating the code multiple times as we can see below in contrast to the above.

// test('should render AddExpensePage correctly', () => {
//    const onSubmit = jest.fn();
//    const history = { push: jest.fn() };
//    const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
//    expect(wrapper).toMatchSnapshot();
// });

// test('should handle onSubmit', () => {
//    const onSubmit = jest.fn();
//    const history = { push: jest.fn() };
//    const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
//    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
//    expect(history.push).toHaveBeenLastCalledWith('/');
//    expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
// });