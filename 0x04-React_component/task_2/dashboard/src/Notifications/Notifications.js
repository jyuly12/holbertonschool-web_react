import React from 'react';
import './Notifications.css';
import  NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

class Notification extends React.Component{
  constructor(props) {
  super(props)
  this.MarkAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id){
    console.log(`Notification ${id} has been marked as read`)
  }
  render(){
  const {displayDrawer, listNotifications} = this.props
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
              {!listNotifications.length ? <NotificationItem value="No new notification for now"/> :
                listNotifications.map(notification => (
                  <NotificationItem key={notification.id}
                                    id={notification.id}
                                    type={notification.type}
                                    value={notification.value}
                                    html={notification.html}
                                    markAsRead={this.MarkAsRead}/>
                ))
              }
            </ul>
          </div>
        )
      : ( <div></div> )
      }
    </React.Fragment>
  );
}};

Notification.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

Notification.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notification;