import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';


class BodySection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, title } = this.props;
    return (
      <div className={css(styles.BodySection)}>
        <h2 className={css(styles.h2)}>{title}</h2>
        {children}
      </div>
    );
  }
}

BodySection.defaultProps = {
  title: "",
};

BodySection.propTypes = {
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  BodySection: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap'
  },
  h2: {
    width: '100%'
  }
})

export default BodySection;