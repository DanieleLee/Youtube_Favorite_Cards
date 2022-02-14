import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './app.css';

import AuthService from './service/auth_service';

function LoginModal(props){
  const onClick = (event) =>{
    var auth_service = new AuthService();
    auth_service.login(event.target.classList[0])
                .then((result) => {
                  console.log(result);
                })
  
  }

  return(
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title 
          id="contained-modal-title-vcenter"
          className='custom-modal'
        >
          <div>
            <img src='./favicon.ico'></img>
          </div>
          <div>
            <h3>Business Card Maker</h3>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        className='custom-modal'
      >
        <h4>Login</h4>
        <Button
          className='Google'
          onClick={onClick}
        >
          google
        </Button>
        <Button
          className='Git'
          onClick={onClick}
        >
          Git
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [email, setEmail] = React.useState(null);
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <LoginModal 
        show={true}
      />
    </>
  );
}

export default App;
