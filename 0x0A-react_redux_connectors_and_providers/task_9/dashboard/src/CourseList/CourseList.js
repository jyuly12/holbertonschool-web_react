import React from 'react';
import PropTypes from 'prop-types'; 
import { StyleSheet, css } from 'aphrodite';
import { connect } from "react-redux";
import CourseListRow from './CourseListRow';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import { courseSelector } from "../selectors/courseSelector";

export class CourseList extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeRow = this.onChangeRow.bind(this);
  }

  componentDidMount() {
    this.props.fetchCourses();
  }

  onChangeRow(id, checked) {
    if (checked) {
      this.props.selectCourse(id);
    } else {
      this.props.unSelectCourse(id);
    }
  }
  render(){
    const { listCourses } = this.props;
    return(
        <table id='CourseList' className={css(styles.list)}>
            <thead>
                <CourseListRow textFirstCell='Available courses'
                                isHeader={true}/>

                <CourseListRow textFirstCell='Course name'
                                textSecondCell='Credit'
                                isHeader={true}
                                />
            </thead>
            <tbody>
                {(!listCourses || listCourses.length === 0) && (<CourseListRow textFirstCell="No course available yet" isHeader={false} />)}
                {listCourses && listCourses.map((course) => (
                  <CourseListRow 
                    key={course.id} 
                    id={course.id} 
                    textFirstCell={course.name} 
                    textSecondCell={course.credit} 
                    isHeader={false} 
                    isChecked={course.isSelected} 
                    onChangeRow={this.onChangeRow} />
                  ))}
            </tbody>
        </table>   
    )
}}

const styles = StyleSheet.create({
    list: {
        borderCollapse: 'collapse',
        border: '1px solid gray',
        width: '60%',
        margin: '3rem auto 3rem auto'
    }
})

CourseList.defaultProps = {
  listCourses: null,
  fetchCourses: () => {},
  selectCourse: () => {},
  unSelectCourse: () => {},
};

CourseList.propTypes = {
  listCourses: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  fetchCourses: PropTypes.func,
  selectCourse: PropTypes.func,
  unSelectCourse: PropTypes.func,
};

export function mapStateToProps(state){
  const coursesList = courseSelector(state);
  return { listCourses: coursesList };
};

const mapProps = {
  fetchCourses,
  selectCourse,
  unSelectCourse,
};

export default connect(mapStateToProps, mapProps)(CourseList);