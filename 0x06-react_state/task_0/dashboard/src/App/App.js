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
    this.state = {displayDrawer: false};
    this.handleKeyCombination = this.handleKeyCombination.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({displayDrawer : true});
  }

  handleHideDrawer(){
    this.setState({displayDrawer : false});
  }

  handleKeyCombination(e) {
    if (e.key === 'h' && e.ctrlKey) {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyCombination);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyCombination);
  }

  render() {
    const {displayDrawer} = this.state
    const { isLoggedIn, logOut } = this.props;
    return (
      <>
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
              <Login />
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
        </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

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