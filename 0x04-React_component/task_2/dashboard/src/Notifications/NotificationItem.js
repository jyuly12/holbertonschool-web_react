import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

class NotificationItems extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
  const {type, value, html, markAsRead, id} = this.props
  if (html) {
    return (
      <li data-notification-type={type}
          dangerouslySetInnerHTML={html}
          onClick={() => markAsRead(id)}>
            {value}
          </li>
    );
  }
  return (
    <li data-notification-type={type}
        onClick={() => markAsRead(id)}>
          {value}
    </li>
  )
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