import { shallow, mount } from 'enzyme';
import React from 'react';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';


describe('<App />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('App renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });
  it('should contain the Notifications component', () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });
  it('should contain the Header component', () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find('Header')).toHaveLength(1);
  });
  it('should contain the Login component', () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find('Login')).toHaveLength(1);
  });
  it('should contain the Footer component', () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find('Footer')).toHaveLength(1);
  });
  it('CourseList is not displayed with isLoggedIn false by default', () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find('CourseList')).toHaveLength(0);
  });
  describe('<App /> logout' , () => {
    it('logOut', () => {
      const logOut = jest.fn(() => undefined);
      shallow(<App logOut={logOut} />);
      const alert = jest.spyOn(global, 'alert');
      expect(alert);
      expect(logOut);
      jest.restoreAllMocks();
    });
  });

  describe('<App /> displayDrawer', () => {
    it('default state for displayDrawer is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it('displayDrawer toggle handleDisplayDrawer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
    const instance = wrapper.instance();
    instance.handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
  });

  it('displayDrawer toggle handleDisplayDrawer and handleHideDrawer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toEqual(false);
  });
  });
});
