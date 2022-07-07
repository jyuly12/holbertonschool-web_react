import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';


describe('<Login/>', () =>{
  
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  
  it('Checking App renders', () => {
    shallow(<Login/>);
  });

  it('Renders list items', () => {
      const wrapper = shallow(<Login/>);
      expect(wrapper.find('label')).to.have.lengthOf(2);
      expect(wrapper.find('input')).to.have.lengthOf(3); 
  });

   it("Verify that the components render 2 label", () => {
    const wrapper = shallow(<Login />);
    const submitInput = wrapper.find("form input[type='submit']");

    expect(submitInput).to.have.lengthOf(1);
    expect(submitInput.prop("disabled")).equal(true);
  });

  it("Verify that the components render 2 label", () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find("#email");
    const passwordInput = wrapper.find("#password");

    emailInput.simulate("change", {
      target: { id: "#email", value: "ramdom@email.com" },
    });

    let submitInput = wrapper.find("form input[type='submit']");

    expect(submitInput.prop("disabled")).equal(true);

    passwordInput.simulate("change", {
      target: { id: "#password", value: "1789" },
    });

    submitInput = wrapper.find("form input[type='submit']");
    expect(submitInput.prop("disabled")).equal(false);
  });
});