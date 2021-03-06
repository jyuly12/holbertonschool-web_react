import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import Notifications from './Notifications';


describe('<Notification/>', () =>{
   it("Notifications renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists());
  });

  it("menu item is being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    expect(wrapper.find("div.menuItem")).to.have.lengthOf(1);
  });
  it("div.Notifications is not being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    expect(wrapper.find("div.Notifications")).to.have.lengthOf(0);
  });
  it("menu item is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    wrapper.update();
    expect(wrapper.find("div.menuItem")).to.have.lengthOf(1);
  });
  it("div.Notifications is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    wrapper.update();
    expect(wrapper.find("div.Notifications")).to.have.lengthOf(1);
  });
});