import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import AppContext from './AppContext';
import { user, logOut } from "./AppContext";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
} from "../actions/uiActionCreators";

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

export const listNotificationsBase = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

export class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyCombination = this.handleKeyCombination.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.state = {
      user,
      logOut: this.logOut,
      listNotifications: listNotificationsBase};
  }


  handleKeyCombination(e) {
    if (e.key === "h" && e.ctrlKey) {
      alert("Logging you out");
      this.state.logOut();
    }
  }

  markNotificationAsRead(id) {
    this.setState({
      listNotifications: this.state.listNotifications.filter(
        (notification)=>{return notification.id !== id}
      )
    })
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyCombination);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyCombination);
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({user});
  }
  render() {
    const {user, logOut,  listNotifications} = this.state
    const value = { user, logOut };
    const {
      isLoggedIn,
      displayDrawer,
      displayNotificationDrawer,
      hideNotificationDrawer,
    } = this.props;
    return (
      <AppContext.Provider value={value}>
        <Notifications
          displayDrawer ={displayDrawer}
          listNotifications={listNotifications}
          handleDisplayDrawer={displayNotificationDrawer}
          handleHideDrawer={hideNotificationDrawer}
          markNotificationAsRead={this.markNotificationAsRead}
          />
        <div className={css(styles.header)}>
          <Header />
        </div>
        <div className={css(styles.body)}>
          {!isLoggedIn ? (
            <BodySectionWithMarginBottom title='Log in to continue'>
              <Login logIn={this.logIn}/>
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title='Course list'>
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title='News from the School'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptas sapiente esse! Sunt debitis id praesentium rem expedita tempore! Excepturi.</p>
          </BodySection>
        </div>
        <div className={css(styles.footer)}>
          <Footer />
        </div>
        </AppContext.Provider>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
};
const styles = StyleSheet.create({
  header: { 
     borderBottom: '3px solid #E3334D',
     padding: '1.5rem 0 1rem 0'
  },
  body: {
    minHeight: '23rem',
  },
  footer: {
    borderTop: '3px solid #E3334D',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    fontStyle: 'italic'
  }
});

export function mapStateToProps(state){
  return {
    isLoggedIn: state.get('isUserLoggedIn'),
    displayDrawer: state.get("isNotificationDrawerVisible"),
  }
};

const stateProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
}
export default connect(mapStateToProps, stateProps)(App);