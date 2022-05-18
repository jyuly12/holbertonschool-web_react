import React from 'react';
import ReactDOM from 'react-dom/client';
import Notification from './Notifications';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='root-notifications'>
      <Notification/>
    </div>
    <App/>
  </React.StrictMode>
);
