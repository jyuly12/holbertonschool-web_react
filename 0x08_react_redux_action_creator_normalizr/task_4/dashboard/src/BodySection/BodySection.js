import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';

class BodySection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='bodySection' className={css(styles.body)}>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

BodySection.defaultProps = {
  title: '',
};

BodySection.propTypes = {
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  body: {
    padding: '1rem 1rem 1rem 0',
  }
})

export default BodySection;