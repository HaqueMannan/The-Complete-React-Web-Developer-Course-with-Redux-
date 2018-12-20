import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';


test('should render Header component correctly', () => {
   const wrapper = shallow(<Header startLogout={() => {}}/>);
   // expect(wrapper.find('h1').text()).toBe('Expensify');
   expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
   const startLogout = jest.fn();
   const wrapper = shallow(<Header startLogout={startLogout} />);
   wrapper.find('button').simulate('click');
   expect(startLogout).toHaveBeenCalled();
});