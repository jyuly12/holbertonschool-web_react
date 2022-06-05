import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
  
describe('<CourseList/>', () =>{
    it('renders properly', () => {
    shallow(<CourseList />);
    });

    it('checking renders', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).to.have.lengthOf(3);
    });
});