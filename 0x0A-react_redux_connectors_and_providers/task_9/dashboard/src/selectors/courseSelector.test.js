import { courseSelector } from './courseSelector';
import { fromJS } from 'immutable';

var _ = require('lodash');

describe('Test courseSelector.js', () => {
  it('Test courseSelector function', () => {
    const state = {
      courses: fromJS([
        { id: 1, name: "ES6", isSelected: false, credit: 60, },
        { id: 2, name: "Webpack", isSelected: false, credit: 20, },
        { id: 3, name: "React", isSelected: false, credit: 40, },
      ]),
    };
    const expected = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: false, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 }
    ];
    const result = courseSelector(state);
    expect(expected).toEqual(result.toJS());
  });
})