import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';


it('Checking App renders', () => {
  shallow(<App />);
});

