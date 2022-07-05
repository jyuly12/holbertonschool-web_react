import { selectCourse, unSelectCourse } from './courseActionCreators'
import {SELECT_COURSE, UNSELECT_COURSE} from './courseActionTypes'

describe('action creators', () => {
    it('selectCourse action', () => {
        const response = { type: SELECT_COURSE, index: 1 }

        const action = selectCourse(1);
        expect(action).toEqual(response)
    });

    it('sunSelectCourse action', () => {
        const response = { type: UNSELECT_COURSE, index: 1 }

        const action = unSelectCourse(1);
        expect(action).toEqual(response)
    });

})