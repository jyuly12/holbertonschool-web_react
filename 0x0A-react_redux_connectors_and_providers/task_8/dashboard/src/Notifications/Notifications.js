import React, { PureComponent, Component } from "react";
import { connect } from "react-redux";
import {
  fetchNotifications,
  markAsAread,
  setNotificationFilter,
} from "../actions/notificationActionCreators";
import NotificationItem from "./NotificationItem";
import { getUnreadNotificationsByType } from "../selectors/notificationSelector";
import PropTypes from "prop-types";
import closeIcon from "../assets/close-icon.png";
import { StyleSheet, css } from "aphrodite";

export class Notifications extends React.PureComponent{
  constructor(props) {
  super(props)
  }

  componentDidMount(){
    this.props.fetchNotifications()
  }
  
  render(){
    const {
        displayDrawer,
        listNotifications,
        handleDisplayDrawer,
        handleHideDrawer,
        markNotificationAsRead,
        setNotificationFilter,
      } = this.props;
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
                    id = 'closeButton'
                    >
                      <img src={closeIcon} alt='close-icon'
                            className={css(styles.buttonImg)}/>
            </button>
            <p>Here is the list of notifications</p>

            <button type="button" id="FilterUrgent" className={css(styles.filterButton)} onClick={() => setNotificationFilter("URGENT")}>❗❗</button>
            <button type="button" id="FilterDefault" className={css(styles.filterButton)} onClick={() => setNotificationFilter("DEFAULT")}>💠</button>
            
            <ul >
              {!listNotifications.length && (<NotificationItem value="No new notification for now" type='no-new' />)}
              
              {listNotifications && listNotifications.map(
                      ({type, value, html, guid}, index) =>
                        <NotificationItem key={index}
                                          id={index}
                                          guid={guid}
                                          type={type}
                                          value={value}
                                          html={html}
                                          markNotificationAsRead={markNotificationAsRead}
                        />
              )}
                
            </ul>
          </div>
        )
      : ( <div></div> )
      }
    </React.Fragment>
  );
}};

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

  filterButton: {
    margin: '4px',
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
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: null,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
  fetchNotifications: () => {}
}
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.object,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
  fetchNotifications: PropTypes.func
}

const mapStateToProps = (state) => {
  const unreadNotificationsByType = getUnreadNotificationsByType(state);

  return {
    listNotifications: unreadNotificationsByType,
  };
};

const mapProps = {
  fetchNotifications,
  markNotificationAsRead: markAsAread,
  setNotificationFilter
}

export default connect(mapStateToProps, mapProps)(Notifications)