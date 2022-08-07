import React, { useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import styles from './app.module.css';
import './common/login.css';

import LoginModal from './components/login/login';
import Maker from './components/maker/maker';


function App({FileInput, authservice, cardRepository}) {
  const [uid, setUid] = React.useState(null);
  const navigate = useNavigate();
  const goToMaker = userId => {
    navigate('/maker', {state:{id: userId}});
  
    // navigate(`/maker/${userId}`);

  }

  const clickEvent = (event) => {
    if(event.target.innerText == "Logout"){
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
  };


  useEffect(() => {
    if(uid != null){
      authservice.onAuthChanged(user => {
        user && goToMaker(user.uid);
      });
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
            
            {/* <Route path='/maker' 
                  element={
                    <Maker 
                      FileInput = {FileInput} 
                      clickEvent = {clickEvent} 
                      nav = {navigate} 
                      authservice = {authservice} 
                      cardRepository = {cardRepository}/>}>

            </Route> */}
            
          </Routes>
      </div>
    </>
  );
}

export default App;
