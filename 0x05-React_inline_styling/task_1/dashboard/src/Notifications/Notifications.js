import React, { Component } from "react";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import closeIcon from "../assets/close-icon.png";
import {StyleSheet, css} from 'aphrodite';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <>
        <div id="menuItem"className={css(styles.menuItem)}>
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div id="Notifications" className={css(styles.notifications)}>
            <button
              className={css(styles.button)}
              aria-label="close"
            >
              <img src={closeIcon} alt="close-icon"
                  className={css(styles.buttonImg)}/>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications.length === 0 && (
                <NotificationItem value="No new notification for now" />
              )}

              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  id={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={this.markAsRead}
                />
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};
const styles = StyleSheet.create({
  menuItem: {
  textAlign: 'right'
  },

  notifications: {
  float: 'right',
  border: '3px dashed #E0354B',
  padding: '10px',
  marginBottom: '20px'
  },
  button: {
    background: 'transparent',
    border: 'none',
    position: 'absolute',
    right: 20
  },
  buttonImg: {
  width: '10px'
  },


});
export default Notifications; 