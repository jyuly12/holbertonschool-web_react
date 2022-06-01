import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import Notifications from './Notifications';

const wrapper = shallow(<Notifications />);

it('Checking Notifications renders', () => {
  shallow(<Notifications />);
});

it('checking render', () => {
    const wrapper = shallow(<Notifications />);
    const li = wrapper.find('div');
    expect(wrapper.text()).contain('Your notifications');
});

it('display drawer is true', () => {
  const wrapper = shallow(<Notifications displayDrawer='true'/>);
  expect(wrapper.find('div.menuItem').exists()).to.equal(true);
  expect(wrapper.find('div.Notifications').exists()).to.equal(true);
});