import React from 'react';
import  NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import closeIcon from "../assets/close-icon.png";
import PropTypes from 'prop-types';
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
                    className={css(styles.button)}
                    >
                      <img src={closeIcon} alt="close-icon"
                            className={css(styles.buttonImg)}/>
            </button>
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
    background: 'transparent',
    border: 'none',
    float: 'right'
  },
  buttonImg: {
  width: '10px'
  },
})

export default Notification;