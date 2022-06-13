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
          
          <div >
            <label htmlFor='email' className={css(styles.label)}>Email:</label>
            <input type='email' id='email' className={css(styles.input)}/>
          </div>

          <div >
            <label htmlFor='password' className={css(styles.label)}>Password:</label>
            <input type='password' id='password' className={css(styles.input)}/>
          </div>

          <button className={css(styles.button)}>OK</button>
        </div>
      </div>
    </React.Fragment>
  )
}
const screenSize = {
  small: '@media screen and (max-width: 900px)',
};
const styles = StyleSheet.create({
 
  AppLogin:{
    marginTop: '2rem',
  },

  p: {
    textAlign: 'center',
  },

  Login: {
    display: 'flex',
    justifyContent: 'center',
    [screenSize.small]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
      alignContent: 'center',
      margin: 'auto',
    },
  },

  label: {
    margin:'0 1rem 0 1rem',
    [screenSize.small]: {
      marginLeft: '0'
    }
  },

  button: {
    marginLeft: '1rem',
    borderRadius: '5px',
    borderColor: '#E5E4E4',
    maxWidth: '2.5rem',
    [screenSize.small]: {
      marginTop: '1rem',
      marginLeft: '0',
    }
  },

  input:{
    borderRadius: '5px',
    borderColor: '#E5E4E4',
    [screenSize.small]: {      
      marginTop: '10px',
      marginBottom: '10px',
    },
  }
})
export default Login;