import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import AppContext from './AppContext';
import { user, logOut } from "./AppContext";

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyCombination = this.handleKeyCombination.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.state = {displayDrawer: false, user, logOut: this.logOut};
  }

  handleDisplayDrawer() {
    this.setState({displayDrawer : true});
  }

  handleHideDrawer(){
    this.setState({displayDrawer : false});
  }

  handleKeyCombination(e) {
    if (e.key === "h" && e.ctrlKey) {
      alert("Logging you out");
      this.state.logOut();
    }
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
    const {user, user: { isLoggedIn }, logOut, displayDrawer} = this.state
    const value = { user, logOut };
    return (
      <AppContext.Provider value={value}>
        <Notifications
          displayDrawer ={displayDrawer}
          listNotifications={listNotifications}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
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


const styles = StyleSheet.create({
  header: { 
     borderBottom: '3px solid #E3334D'
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
export default App;