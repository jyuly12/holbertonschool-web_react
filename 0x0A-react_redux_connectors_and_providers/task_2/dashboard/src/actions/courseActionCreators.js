import {SELECT_COURSE, UNSELECT_COURSE} from './courseActionTypes'

export function selectCourse(index) {
    return {type: SELECT_COURSE, index}
}
export const selectCourseBound = (index) => dispatch(selectCourse(index))

export function unSelectCourse(index) {
    return {type: UNSELECT_COURSE, index}
}

export const unSelectCourseBound = (index) => dispatch(unSelectCourse(index)) 