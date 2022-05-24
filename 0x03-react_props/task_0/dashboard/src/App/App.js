import './App.css';
import React from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notification from '../Notifications/Notifications';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Notification/>
        <Header/>
        <hr/>
        <Login/>
        <hr/>
        <Footer/>
      </React.Fragment>
    </div>
  );
}

export default App;
