import React from 'react';
import './Notifications.css';
import {getLatestNotification} from '../utils/utils';
import  NotificationItem from './NotificationItem';

function Notification() {
  return (
    <div className='Notifications'>
      <button style={{"ariaLabel": "Close"}} 
        onClick={console.log("Close button has been clicked")}>
        x
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
		    <NotificationItem type="urgent" value="New resume available" />
		    <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
};

export default Notification;