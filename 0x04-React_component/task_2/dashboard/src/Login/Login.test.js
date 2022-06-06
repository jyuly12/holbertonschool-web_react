import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Login from './Login';


describe('<Login/>', () =>{
  it('Checking App renders', () => {
    shallow(<Login/>);
  });

  it('Renders list items', () => {
      const wrapper = shallow(<Login/>);
      expect(wrapper.find('label')).to.have.lengthOf(2);
      expect(wrapper.find('input')).to.have.lengthOf(2); 
  });
});