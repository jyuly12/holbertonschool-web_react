import {SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS} from './courseActionTypes';
import "node-fetch";
import regeneratorRuntime from "regenerator-runtime";

export function selectCourse(index) {
    return {type: SELECT_COURSE, index}
}
export const selectCourseBound = (index) => dispatch(selectCourse(index))

export function unSelectCourse(index) {
    return {type: UNSELECT_COURSE, index}
}
export const unSelectCourseBound = (index) => dispatch(unSelectCourse(index)) 

export function setCourses(data){
  return {type: FETCH_COURSE_SUCCESS, data}
}

export const fetchCourses = () => {
    return async (dispatch) => {
        try {
            const res = await fetch("./courses.json");
            const data = await res.json();
            return dispatch(setCourses(data));
        } catch (error) {};
    };
}
