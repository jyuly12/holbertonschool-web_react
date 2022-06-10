import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Footer from './Footer';
import { StyleSheetTestUtils } from "aphrodite";

const wrapper = shallow(<Footer/>);

describe('<Footer/>', () =>{
  
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Checking App renders', () => {
    shallow(<Footer/>);
  });

  it('Checking App div renders', () => {
    expect(wrapper.find('.App-footer').exists()).to.equal(true);
  });


  it('Renders the <p>', () => {
    expect(wrapper.find('p').text()).contain("Copyright");
  });
});