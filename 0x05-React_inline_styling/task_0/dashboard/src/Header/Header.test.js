import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Header from './Header';



describe('<CourseList/>', () =>{
  const wrapper = shallow(<Header/>);
  it('Checking App renders', () => {
    shallow(<Header/>);
  });

  it('Checking App div renders', () => {
    expect(wrapper.find('.App-header').exists()).to.equal(true);
  });

  it('renders header', () => {
    expect(wrapper.find('img').exists()).to.equal(true);
  });

  it('Renders the <p>', () => {
    expect(wrapper.contains(<h1>School dashboard</h1>)).to.equal(true);
  });
});