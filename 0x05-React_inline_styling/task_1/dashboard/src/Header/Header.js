import React from "react";
import holberton_logo from "../assets/holberton_logo.jpg";
import { StyleSheet, css } from 'aphrodite';


function Header() {
  return (
    <div className={css(styles.header)}>
      <img src={holberton_logo} className={css(styles.img)}/>
      <h1>School dashboard</h1>
    </div>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    color: '#e01d3f',
    fontSize: '20px'
  },
  img: {
    width: '200px'
  }
})

export default Header;