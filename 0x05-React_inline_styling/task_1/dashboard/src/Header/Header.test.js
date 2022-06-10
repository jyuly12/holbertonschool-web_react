import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Header from './Header';
import { StyleSheetTestUtils } from "aphrodite";


describe('<CourseList/>', () =>{

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  const wrapper = shallow(<Header/>);
  it('Checking App renders', () => {
    shallow(<Header/>);
  });

  it('Checking App div renders', () => {
    expect(wrapper.find('div').exists()).to.equal(true);
  });

  it('renders header', () => {

    expect(wrapper.find('img').exists()).to.equal(true);
  });

  it('Renders the <p>', () => {
    expect(wrapper.contains(<h1>School dashboard</h1>)).to.equal(true);
  });
});