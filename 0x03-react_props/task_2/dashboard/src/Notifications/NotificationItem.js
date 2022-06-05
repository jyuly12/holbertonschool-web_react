import React from 'react';
import './Notifications.css';

function NotificationItem({ type, html, value }) {
  let listItem;

  if (value) {
    listItem = <li data-notification-type={type}>{value}</li>;
  } else {
    listItem = (
      <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
    );
  }

  return listItem;
}



export default NotificationItem ;