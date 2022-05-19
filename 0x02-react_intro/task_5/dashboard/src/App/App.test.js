import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';


it('Checking App renders', () => {
  shallow(<App />);
});

it('Checking App div renders', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find('.App-header').exists()).to.equal(true);
  expect(wrapper.find('.App-body').exists()).to.equal(true);
  expect(wrapper.find('.App-footer').exists()).to.equal(true);
});