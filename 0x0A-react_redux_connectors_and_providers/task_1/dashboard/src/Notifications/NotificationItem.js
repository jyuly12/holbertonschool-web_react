import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';

class NotificationItems extends React.PureComponent {
  constructor(props){
    super(props)
  }
  render() {
    const { type, html, value, markAsRead, id } = this.props;
    const Style = css(type === 'urgent' ? styles.urgent : styles.default);;
    let item;

    value
      ? (item = (
          <li data-notification-type={type}
              onClick={() => markAsRead(id)}
              className={Style}>
            {value}
          </li>
        ))
      : (item = (
          <li
            data-notification-type={type}
            dangerouslySetInnerHTML={html}
            onClick={() => markAsRead(id)}
            className={Style}
          ></li>
        ));

    return item;
}}

NotificationItems.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  markAsRead: PropTypes.func
}

NotificationItems.defaultProps = {
  type: 'default',
  markAsRead: () => {}
}
const screenSize = {
  small: '@media screen and (max-width: 900px)',
};

const listItemSmall = {
  listStyle: 'none',
  borderBottom: '1px solid black',
  width: '100%',
  padding: '10px 8px',
  fontSize: '20px',
};

const styles = StyleSheet.create({
  default: {
    color: 'blue',
    [screenSize.small]: listItemSmall,
  },

  urgent: {
    color: 'red',
    [screenSize.small]: listItemSmall,
  },

});

export default NotificationItems;