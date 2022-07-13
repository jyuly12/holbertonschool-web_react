import {Map} from 'immutable';
import rootReducer from "./rootReducer";
import { combineReducers } from "redux";

describe('rootReducer test', () => {
    it('test the root reducer’s initial state', () => {
    const expected = {
      courses: Map({}),
      notifications: Map({}),
      ui: Map({})
    };

    const reducer = combineReducers(rootReducer);

    const state = reducer(undefined, { type: "RANDOM" });

    for (const item in expected) {
      expect(state[item]).toBeTruthy();
      expect(typeof expected[item]).toEqual(typeof state[item]);
    }
  });
})