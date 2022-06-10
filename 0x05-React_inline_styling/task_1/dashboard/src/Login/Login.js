import React from 'react';
import {StyleSheet, css} from 'aphrodite';

function Login(){
  return(
    <React.Fragment>
      <div className={css(styles.AppLogin)}>
        <p className={css(styles.p)}>
          Login to access the full dashboard
        </p>
        <div className={css(styles.Login)}>
          <label htmlFor="email" className={css(styles.label)}>Email: </label>
          <input type="email" id="email" className={css(styles.input)}/>
          <label htmlFor="password" className={css(styles.label)}>Password:</label>
          <input type="password" id="password" className={css(styles.input)}/>
          <button className={css(styles.button)}>OK</button>
        </div>
      </div>
    </React.Fragment>
  )
}
const styles = StyleSheet.create({
 
  AppLogin:{
    marginTop: '2rem',
  },
  p: {
    textAlign: 'center',
  },
  Login: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  label: {
    margin:'0 1rem 0 1rem',
  },

  button: {
    marginLeft: '1rem',
    borderRadius: '5px',
    borderColor: '#E5E4E4'
  },

  input:{
    borderRadius: '5px',
    borderColor: '#E5E4E4'
  }
})
export default Login;