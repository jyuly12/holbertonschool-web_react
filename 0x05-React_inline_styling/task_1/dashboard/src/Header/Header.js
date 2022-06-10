import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import {StyleSheet, css} from 'aphrodite';

function Header(){
    return (
        <div className={css(styles.AppHeader)}>
            <img src={logo} 
                className={css(styles.AppLogo)} 
                alt="logo" />
            <h1>
            School dashboard
            </h1>
      </div>
    )
}

const styles = StyleSheet.create({
  AppHeader: {
    backgroundColor: '#ffffffd8',
    display: 'flex',
    alignItems: 'center',
    color: '#E3334D'
    },

  AppLogo: {
    height: '10.5rem'
  }

})
export default Header;