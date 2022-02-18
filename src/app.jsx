import React, { useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import styles from './app.module.css';
import './common/login.css';

import LoginModal from './components/login/login';


function App({authservice}) {
  const [email, setEmail] = React.useState(null);
  const [modalShow, setModalShow] = React.useState(false);
  const onClick = (event) => {
    if(event.target.innerText == "Logout"){
      authservice.logout();
    }else{
      authservice.login( event.target.innerText )
        .then((result) => {
          if(result != undefined){
            const user = result.user;
            // setEmail(user.email);
          }
        })
        .catch((error) => {
          console.log("error:" + error);
        })
    }
    
  };

  useEffect(() => {
    console.log("email:" + email);
  }
  ,[email])

  return (
    <div class={styles.app}>
      <LoginModal 
        show = {true}
        authservice = {authservice}
        onClick = {onClick}
      />
    </div>
  );
}

export default App;
