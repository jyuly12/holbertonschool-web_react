import React from 'react';
import './Notifications.css';
import  NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

const Notification= ({displayDrawer, listNotifications}) => {
  return (
    <React.Fragment>
      <div className='menuItem'>
          <p>Your notifications</p>
      </div>
       {displayDrawer
        ? (
          <div className="Notifications">
            <button style={{"arialabel": "Close"}} onClick={console.log('Close button has been clicked')}>x</button>
            <p>Here is the list of notifications</p>
            <ul>
              {!listNotifications.length ? <NotificationItem value="No new notification for now" /> :
                listNotifications.map(notification => (
                  <NotificationItem key={notification.id}
                                    type={notification.type}
                                    value={notification.value}
                                    html={notification.html}/>
                ))
              }
            </ul>
          </div>
        )
      : ( <div></div> )
      }
    </React.Fragment>
  );
};

Notification.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

Notification.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notification;