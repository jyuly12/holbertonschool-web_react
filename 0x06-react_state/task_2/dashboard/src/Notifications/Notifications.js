import React from 'react';
import  NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import closeIcon from '../assets/close-icon.png';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends React.Component{
  constructor(props) {
  super(props)
  this.MarkAsRead = this.markAsRead.bind(this);
  }
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length >
        this.props.listNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }
  markAsRead(id){
    console.log(`Notification ${id} has been marked as read`)
  }
  render(){
  const {displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer} = this.props

  const menuStyle = css(
      displayDrawer ? styles.menuItemNoShow : styles.menuItem
  );
  return (
    <React.Fragment>
      <div id='menuItem'
          className={menuStyle}
          onClick={handleDisplayDrawer}>
          <p>Your notifications</p>
      </div>
       {displayDrawer
        ? (
          <div className={css(styles.Notifications)} id='Notifications'>
            <button style={{'arialabel': 'Close'}}
                    className={css(styles.button)}
                    onClick={handleHideDrawer}
                    >
                      <img src={closeIcon} alt='close-icon'
                            className={css(styles.buttonImg)}/>
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.listItem)}>
              {!listNotifications.length ? <NotificationItem value='No new notification for now'/> :
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

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

const screenSize = {
  small: '@media screen and (max-width: 900px)',
};

const opacityKeyframes = {
  from: {
    opacity: 0.5,
  },

  to: {
    opacity: 1,
  },
};
const translateYKeyframes = {
  '0%': {
    transform: 'translateY(0)',
  },

  '50%': {
    transform: 'translateY(-5px)',
  },

  '75%': {
    transform: 'translateY(5px)',
  },

  '100%': {
    transform: 'translateY(0)',
  },
};

const borderKeyframes = {
  '0%': {
    border: `2px dashed blue`,
  },

  '100%': {
    border: `2px dashed #e2374c`,
  },
};
const styles = StyleSheet.create({
  Notifications: {
    float: 'right',
    padding: '0.2rem',
    width: '30%',
    animationName: [borderKeyframes],
    animationDuration: '0.8s',
    animationIterationCount: 1,
    animationFillMode: 'forwards',
    [screenSize.small]: {
      margin: '0',
      float:'none',
      width: '100%',
      border:'none',
      minHeight: '500px'
    }
  },

  menuItem: {
    float: 'right',
    margin: '9px',
    backgroundColor: '#fff8f8',
    ':hover': {
      cursor: 'pointer',
      animationName: [opacityKeyframes, translateYKeyframes],
      animationDuration: '1s, 0.5s',
      animationIterationCount: 3,
    },
  },

  menuItemNoShow: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: '#fff8f8',
    display: 'none'
  },


  button: {
    background: 'transparent',
    border: 'none',
    float: 'right'
  },
  buttonImg: {
    width: '10px'
  },
  listItem: {
    [screenSize.small]:{
      padding: '0'
    }
  }
})

export default Notifications;