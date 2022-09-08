import React, { useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import styles from './app.module.css';
import './common/colors.module.css';
import './components/login/login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import LoginModal from './components/login/login';
import Maker from './components/maker/maker';
import Detail from './components/detail/detail';


function App({FileInput, authservice, cardRepository, youtube}) {
  const [uid, setUid] = React.useState(null);

  const navigate = useNavigate();
  const goToMaker = (userId) => {
    navigate('/maker', {state:{id: userId}}); 
    // navigate(`/maker/${userId}`);
  }
  const goToDetail = (card) => {
    navigate('/detail', {card: card});
  }

  const clickEvent = (event) => {
    //카드클릭
    if(event.card != undefined){
      goToDetail(event);
    }else{
      //버튼클릭
      if(event.target.innerText == "LOGOUT"){
        authservice.logout();
        setUid(null);
        navigate('/');
      }else{
        authservice.login( event.target.innerText )
          .then((result) => {
            if(result != undefined){
              const user = result.user;
              setUid(user.uid);
              goToMaker(user.uid);
            }
          })
          .catch((error) => {
            console.log("error:" + error);
          });
      }
    
    }

  };

  useEffect(() => {
    if(uid != null){
      // youtube
      //   .mostPopular()
      //   .then((videos) => setYouList(videos))

      authservice.onAuthChanged(user => {
        user && goToMaker(user.uid);
      });

      // setYouList(youtube.items);
      
      
    }    
  }
  ,[uid]);

  return (
    <>
      <div className={styles.app}>
          <Routes>
            {!uid && (
              <Route path='/' exact element={<LoginModal show = {true} authservice = {authservice} clickEvent = {clickEvent} />}></Route>
            )}
            
            <Route path='/maker' 
                  element={
                    <Maker 
                      FileInput = {FileInput} 
                      clickEvent = {clickEvent} 
                      nav = {navigate} 
                      authservice = {authservice} 
                      cardRepository = {cardRepository}/>
                  }>
            </Route>

            <Route path='/detail' 
                  element={
                    <Detail
                      youtube={youtube}
                      FontAwesomeIcon = {FontAwesomeIcon}
                      />
                  }>
            </Route>
            
          </Routes>
      </div>
    </>
  );
}

export default App;
