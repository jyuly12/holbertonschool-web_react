import React from "react";
import {StyleSheet, css} from 'aphrodite';

function Login() {
  return (
    <div className={css(styles.login)}>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email" className={css(styles.label)}>Email: </label>
      <input type="email" id="email" className={css(styles.input)}/>
      <label htmlFor="password" className={css(styles.label)}>Password:</label>
      <input type="password" id="password" className={css(styles.input)}/>
      <button className={css(styles.button)}>OK</button>
    </div>
  );
}

const styles = StyleSheet.create({
  login: {
    backgroundColor: '#ffffffd8',
    margin: '40px',

  },
  input: {
    borderRadius: '5px',
    borderColor: '#E5E4E4'
  },
  label: {
     margin: '0 1rem 0 1rem'
  },
  button:{
    marginLeft: '1rem',
    marginTop: '1rem',
    borderRadius: '5px',
    borderColor: '#E5E4E4'
  }
})
export default Login;