import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notification from '../Notifications/Notifications'

describe('<App/>', () =>{
  it('Checking App renders', () => {
    shallow(<App />);
  });

  it('checking renders', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).exists()).to.equal(true);
    expect(wrapper.find(Login).exists()).to.equal(true);
    expect(wrapper.find(Footer).exists()).to.equal(true);
    expect(wrapper.find(Notification).exists()).to.equal(true);
  });
});
