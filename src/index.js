import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import reportWebVitals from './reportWebVitals';

import { firebaseApp } from './service/fBase';
import AuthService from './service/auth_service';
import { BrowserRouter } from 'react-router-dom';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';
import CardRepository from './service/card_repository';
import axios from 'axios';
import Youtube from './service/youtube';


const authService = new AuthService(firebaseApp);
const imageUploader = new ImageUploader();
const cardRepository = new CardRepository();
const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

//*youtube Injection*
const httpClient = axios.create({
  baseURL: 'https://content-youtube.googleapis.com/youtube/v3',
  params:{key: process.env.REACT_APP_YOUTUBE_API_KEY}
});
const youtube = new Youtube(httpClient);



ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <App 
          authservice = {authService}
          FileInput = {FileInput}
          cardRepository = {cardRepository}
          youtube = {youtube} 
        />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
