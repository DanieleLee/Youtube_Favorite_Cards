import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import reportWebVitals from './reportWebVitals';

import { firebaseApp } from './service/fBase';
import AuthService from './service/auth_service';
import { BrowserRouter } from 'react-router-dom';


const authService = new AuthService(firebaseApp);

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <App 
          authservice = {authService} 
        />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
