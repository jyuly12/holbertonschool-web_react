import { shallow, mount } from 'enzyme';
import React from 'react';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<Notifications />', () => {
  let listNotifications;
  let latestNotification;

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('Notifications renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    const item = wrapper.find('Notifications');
    expect(item).toHaveLength(0);
  });

  describe('displayDrawer', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('clicking on the menu item calls handleDisplayDrawer', () => {
    const handleDisplayDrawer = jest.fn();
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
      />
    );
    wrapper.find('#menuItem').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
    expect(handleHideDrawer).not.toHaveBeenCalled();
    jest.restoreAllMocks();
  });

  it('clicking on the button calls handleHideDrawer', () => {
    const handleDisplayDrawer = jest.fn();
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications
        displayDrawer
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
      />
    );
    wrapper.find('button').simulate('click');
    expect(handleDisplayDrawer).not.toHaveBeenCalled();
    expect(handleHideDrawer).toHaveBeenCalled();
    jest.restoreAllMocks();
  });
  });

});
