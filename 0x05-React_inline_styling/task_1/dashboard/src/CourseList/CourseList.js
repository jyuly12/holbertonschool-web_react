import React from "react";
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from "./CourseShape";
import {StyleSheet, css} from 'aphrodite';

function CourseList({listCourses}){
    return(
        <table id='CourseList' className={css(styles.list)}>
            <thead>
                <CourseListRow textFirstCell="Available courses"
                                isHeader={true}/>

                <CourseListRow textFirstCell="Course name"
                                textSecondCell="Credit"
                                isHeader={true}
                                />
            </thead>
            <tbody>
                {!listCourses.length ? <CourseListRow textSecondCell="No course available yet" isHeader={false}/> :
                    listCourses.map(course => (
                        <CourseListRow key={course.id}
                                        textFirstCell={course.name}
                                        textSecondCell={course.credit}
                                        isHeader={false} />
                    )) 
                }
                
                
            </tbody>
        </table>   
    )
}
CourseList.defaultProps = {
    listCourses: []
}
CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape)
}
const styles = StyleSheet.create({
    list: {
        borderCollapse: 'collapse',
        border: '1px solid gray',
        width: '60%',
        margin: '3rem auto 3rem auto'
    }
})
export default CourseList;