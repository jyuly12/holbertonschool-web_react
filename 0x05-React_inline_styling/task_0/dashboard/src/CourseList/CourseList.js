import React from "react";
import CourseListRow from "./CourseListRow";
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";
import "./CourseList.css";

const header_style= {
  background: '#deb5b545'
};
const row_style = {
  background: '#f5f5f5ab'
};
function CourseList({ listCourses }) {
  return (
    <table id="CourseList">
      <thead style={header_style}>
        <CourseListRow textFirstCell="Available courses" isHeader={true}  />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      <tbody style={row_style}>
        {listCourses.length === 0 && (
          <CourseListRow
            textFirstCell="No course available yet"
            isHeader={false}
          />
        )}

        {listCourses.map((course) => (
          <CourseListRow
            key={course.id}
            textFirstCell={course.name}
            textSecondCell={course.credit}
            isHeader={false}
          />
        ))}
      </tbody>
    </table>
  );
}

CourseList.defaultProps = {
  listCourses: [],
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

export default CourseList;