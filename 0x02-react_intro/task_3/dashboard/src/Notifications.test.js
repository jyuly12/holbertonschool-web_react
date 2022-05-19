import { shallow } from 'enzyme';
import { expect } from 'chai';
import Notifications from './Notifications';

const wrapper = shallow(<Notifications />);

it('Checking Notifications renders', () => {
  shallow(<Notifications />);
});

it('Renders list items', () => {
    expect(wrapper.find('ul').children()).to.have.lengthOf(3);
});

it('Renders the <p>', () => {
  expect(
    wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)
  ).to.equal(true);
});