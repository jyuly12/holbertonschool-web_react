import React from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notification from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import {getLatestNotification} from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';

const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
]
const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification()}}
]
class App extends React.Component {
  constructor(props){
    super(props);
    this.control = false;
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(event) {
    if (event.keyCode === 17) this.control = true
    if (event.keyCode === 72 && this.control) {
      alert('Logging you out');
      this.props.logOut();
    }
  }
  render(){
    return (
      <React.Fragment>
          <Notification listNotifications={listNotifications}/>
          <div className={css(styles.header)}>
            <Header />
          </div> 
          <div className={css(styles.body)}>
            { !this.props.isLoggedIn ? 
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login /> 
              </BodySectionWithMarginBottom> :
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses}/>
              </BodySectionWithMarginBottom>
            }
          </div>
          <BodySection title="News from the School">
            <p>ramdom text</p>
          </BodySection>
          <div className={css(styles.footer)}>
            <Footer />
          </div>
      </React.Fragment>
    );
  }
}
App.propTypes = {
  logOut: PropTypes.func,
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffffffd8'
  },
  body:{
    backgroundColor: '#ffffffd8',
    minHeight: '15rem',
  },
  hr: {
    borderColor: '#E3334D',
    backgroundColor: '#E3334D',
    height: '2px'
  },
 
  footer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    bottom: 0,
    fontStyle: 'italic'
  }
});

export default App;
