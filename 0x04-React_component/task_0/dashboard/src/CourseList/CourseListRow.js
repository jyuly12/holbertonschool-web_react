import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow(props) {
  if (props.isHeader) {
    return (
      <tr>
        {!props.textSecondCell
          ? (<th colSpan='2'>{props.textFirstCell}</th>)
          : (
            <>
              <th>{props.textFirstCell}</th>
              <th>{props.textSecondCell}</th>
            </>
            )
        }
      </tr>
    )
  }
  return (
    <>
      <td>{props.textFirstCell}</td>
      <td>{props.textSecondCell}</td>
    </>
  )
}
CourseListRow.propTypes = {
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
export default CourseListRow;
