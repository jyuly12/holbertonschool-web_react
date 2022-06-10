import React from 'react';
import  NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';
import './Notifications.css'
import { StyleSheet, css } from 'aphrodite';

class Notification extends React.Component{
  constructor(props) {
  super(props)
  this.MarkAsRead = this.markAsRead.bind(this);
  }
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }
  markAsRead(id){
    console.log(`Notification ${id} has been marked as read`)
  }
  render(){
  const {displayDrawer, listNotifications} = this.props
  return (
    <React.Fragment>
      <div id='menuItem' className={css(styles.menuItem)}>
          <p>Your notifications</p>
      </div>
       {displayDrawer
        ? (
          <div className={css(styles.Notifications)} id='Notifications'>
            <button style={{"arialabel": "Close"}}
                    onClick={console.log('Close button has been clicked')}
                    className={css(styles.button)}
                    >x</button>
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

const styles = StyleSheet.create({
  Notifications: {
    float: 'right',
    padding: '0.5rem',
    width: '30%',
    border: 'dotted #e2374c',
  },

  menuItem: {
    display: 'flex',
    justifyContent: 'flex-end',
  },

  button: {
    float: 'right'
  }
})

export default Notification;