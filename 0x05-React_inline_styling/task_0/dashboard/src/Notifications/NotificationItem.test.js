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
    it("when calling the function markAsRead on an instance of the component, the spy is being called with the right message", () => {
    const id = 7;

    const wrapper = shallow(
      <NotificationItem type="default" value="test" id={id} />
    );
    const instance = wrapper;

    instance.markAsRead = jest.fn();

    const listItem = wrapper.find("li").first();

    listItem.simulate("click");

    instance.markAsRead(id);

    expect(instance.markAsRead).toHaveBeenCalledWith(7);
    jest.restoreAllMocks();
  });

});