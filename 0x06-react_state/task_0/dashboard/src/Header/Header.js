import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import {StyleSheet, css} from 'aphrodite';

function Header(){
    return (
        <div className={css(styles.header)}>
            <img src={logo} 
                className={css(styles.logo)} 
                alt='logo' />
            <h1>
            School dashboard
            </h1>
      </div>
    )
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    color: '#E3334D'
    },

  logo: {
    height: '10.5rem'
  }

})
export default Header;