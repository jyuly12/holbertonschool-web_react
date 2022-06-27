import React from 'react';
import {StyleSheet, css} from 'aphrodite';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
      };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  handleChangeEmail(event) {
    const { value } = event.target;
    const { password } = this.state;

    if (value !== "" && password !== "") this.setState({ enableSubmit: true });
    else this.setState({ enableSubmit: false });

    this.setState({ email: event.target.value });
  }

  handleChangePassword(event) {
    const { value } = event.target;
    const { email } = this.state;

    if (email !== "" && value !== "") this.setState({ enableSubmit: true });
    else this.setState({ enableSubmit: false });

    this.setState({ password: event.target.value });
  }

  render (){
    const {isLoggedIn, email, password, enableSubmit} = this.state
    return(
      <React.Fragment>
        <div className={css(styles.AppLogin)}>
          <p className={css(styles.p)}>
            Login to access the full dashboard
          </p>
          <div >
            <form action="" onSubmit={this.handleLoginSubmit} className={css(styles.Login)}>
              <div >
                <label htmlFor='email' className={css(styles.label)} >Email:</label>
                <input type='email' id='email' className={css(styles.input)} value={email} onChange={this.handleChangeEmail}/>
              </div>

              <div >
                <label htmlFor='password' className={css(styles.label)}>Password:</label>
                <input type='password' id='password' className={css(styles.input)} value={password} onChange={this.handleChangePassword}/>
              </div>
              <input type='submit' className={css(styles.button)} disabled={!enableSubmit} />
            </form>
          </div>
        </div>
      </React.Fragment>
    )
  }
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
    maxWidth: '3.5rem',
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