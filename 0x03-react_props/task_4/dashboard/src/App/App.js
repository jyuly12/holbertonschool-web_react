import './App.css';
import React from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notification from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

function App(props) {
  return (
    <React.Fragment>
      <div className="App">
        <Notification />
        <Header />
        <hr/>
        { !props.isLoggedIn ? <Login /> : <CourseList /> }
        <hr/>
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: false
}

export default App;
