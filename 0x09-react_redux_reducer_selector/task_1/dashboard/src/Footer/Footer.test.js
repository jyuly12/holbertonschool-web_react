import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { user, logOut, AppContext } from '../App/AppContext';

describe('<Footer />', () => {
  it('render without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists());
  });

});