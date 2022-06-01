import './Login.css'
import React from 'react';

function Login(){
  return(
    <React.Fragment>
      <div className='App-login'>
        <p>
          Login to access the full dashboard
        </p>
        <label>Email:<input /></label>
        <label>Password:<input/></label>
        <button>OK</button>
      </div>
    </React.Fragment>
  )
}

export default Login;
