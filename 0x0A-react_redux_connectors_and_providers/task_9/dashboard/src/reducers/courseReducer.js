import {
    FETCH_COURSE_SUCCESS,
    SELECT_COURSE,
    UNSELECT_COURSE }
    from '../actions/courseActionTypes'
import coursesNormalizer from '../schema/courses'
import { Map} from 'immutable';

export const initialState = [] 
export default function courseReducer(state = Map(initialState), action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const courseNormalize = coursesNormalizer(action.data)
      Object.keys(courseNormalize).map((key) => {
        courseNormalize[key].isSelected = false;
      });
      return state.merge(courseNormalize);

    case SELECT_COURSE:
      return state.setIn([String(action.index), "isSelected"], true);

    case UNSELECT_COURSE:
      return state.setIn([String(action.index), "isSelected"], false);

    default:
      break;
  }
  return state;
};
