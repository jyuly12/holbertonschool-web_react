import React from 'react';
import './Notifications.css';
import {getLatestNotification} from '../utils/utils';
import  NotificationItem from './NotificationItem';

function Notification(props) {
  return (
    <React.Fragment>
      <div className='menuItem'>
          <p>Your notifications</p>
      </div>
       {props.displayDrawer
        ? (
          <div className="Notifications">
            <button style={{"aria-label": "Close"}} onClick={console.log('Close button has been clicked')}>x</button>
            <p>Here is the list of notifications</p>
            <ul>
              <NotificationItem type="default" value="New course available" />
		          <NotificationItem type="urgent" value="New resume available" />
		          <NotificationItem type="urgent" html={getLatestNotification()} />
            </ul>
          </div>
        )
      : ( <div></div> )
      }
    </React.Fragment>
  );
};

Notification.defaultProps = {
  displayDrawer: false
}

export default Notification;