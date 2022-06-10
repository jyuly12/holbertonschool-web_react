import React from 'react';
import PropTypes from 'prop-types';

const header_style= {
  background: '#deb5b545'
};
const row_style = {
  background: '#f5f5f5ab'
};

function CourseListRow(props) {
  let rowElement;
  if (props.isHeader) {
    <>
      {!props.textSecondCell
        ? rowElement=(<th colSpan='2'>{props.textFirstCell}</th>)
        : rowElement=(
        <>
          <th>{props.textFirstCell}</th>
          <th>{props.textSecondCell}</th>
        </>
        )    
}
    </>
  }
  else {
    rowElement=(<>
      <td>{props.textFirstCell}</td>
      <td>{props.textSecondCell}</td>
    </>)
  }
  let isHeaderStyle;

  if (props.isHeader) isHeaderStyle = header_style ;
  else isHeaderStyle = row_style;
  return <tr style={isHeaderStyle}>{rowElement}</tr>;
}
CourseListRow.propTypes = {
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
export default CourseListRow;
