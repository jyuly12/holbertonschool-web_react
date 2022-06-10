import React from 'react';
import PropTypes from 'prop-types';

class NotificationItems extends React.PureComponent {
  constructor(props){
    super(props)
  }
  render() {
    const { type, html, value, markAsRead, id } = this.props;
    let item;

    value
      ? (item = (
          <li data-notification-type={type} onClick={() => markAsRead(id)}>
            {value}
          </li>
        ))
      : (item = (
          <li
            data-notification-type={type}
            dangerouslySetInnerHTML={html}
            onClick={() => markAsRead(id)}
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

export default NotificationItems;