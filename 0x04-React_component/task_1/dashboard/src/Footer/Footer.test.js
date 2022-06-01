import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Footer from './Footer';

const wrapper = shallow(<Footer/>);

it('Checking App renders', () => {
  shallow(<Footer/>);
});

it('Checking App div renders', () => {
  expect(wrapper.find('.App-footer').exists()).to.equal(true);
});


it('Renders the <p>', () => {
  expect(wrapper.find('p').text()).contain("Copyright");
});
