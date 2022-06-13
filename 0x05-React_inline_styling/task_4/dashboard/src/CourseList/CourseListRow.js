import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';

const header_style= {
  background: '#deb5b545'
};
const row_style = {
  background: '#f5f5f5ab'
};

function CourseListRow(props) {
  let rowElement;
  const Style = css(
    props.isHeader ? styles.Th : styles.Td
  );
  if (props.isHeader) {
    <>
      {!props.textSecondCell
        ? rowElement=(<th colSpan='2' className={css(styles.Span2)}>{props.textFirstCell}</th>)
        : rowElement=(
        <>
          <th className={Style}>{props.textFirstCell}</th>
          <th className={Style}>{props.textSecondCell}</th>
        </>
        )    
}
    </>
  }
  else {
    rowElement=(<>
      <td className={Style}>{props.textFirstCell}</td>
      <td className={Style}>{props.textSecondCell}</td>
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

const styles = StyleSheet.create({
  Th: {
    borderTop: '1px solid grey',
    borderBottom: '1px solid grey',
    textAlign: 'left',
    fontSize: '15px',
  },

  Span2: {
    textAlign: 'center',
    fontSize: '17px'
  },

  Td: {
    textAlign: 'left',
  },
})
export default CourseListRow;
