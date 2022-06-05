import CourseListRow from './CourseListRow';
import { shallow } from 'enzyme';
import React from 'react';

describe('<CourseListRow/>', () =>{
  it("CourseListRow renders without crashing", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);
    expect(wrapper.exists());
  });
  it("When isHeader is true renders one cell with colspan = 2 when textSecondCell does not exist", () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="test" />
    );
    wrapper.update();
    const item = wrapper.find("th");

    expect(item).toHaveLength(1);
    expect(item.prop("colSpan")).toEqual("2");
  });
  it("When isHeader is true renders two cells when textSecondCell is present", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="test"
        textSecondCell="second"
      />
    );
    wrapper.update();
    const item = wrapper.find("th");

    expect(item).toHaveLength(2);
    expect(item.first().text()).toEqual("test");
    expect(item.at(1).text()).toEqual("second");
  });
  
});