import NotificationItem  from "./NotificationItem";
import React from 'react';
import { shallow } from 'enzyme';

describe('<NotificationItem/>', () =>{
  const wrapper = shallow(<NotificationItem />);

  it('Checking NotificationItem renders', () => {
    shallow(<NotificationItem />);
  });

  it('Checks for correct html rendering', () => {
    const wrapper = shallow(<NotificationItem type="urgent" />);
    expect(wrapper.html()).toContain('urgent');
  });

  it('Checks for correct html rendering', () => {
    const wrapper = shallow(<NotificationItem value="This is a success notification" />);
    expect(wrapper.find('li').text()).toBe('This is a success notification');
  });

});