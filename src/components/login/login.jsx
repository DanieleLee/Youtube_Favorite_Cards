import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const LoginModal = ({clickEvent, onHide}) => (
    // const onClick = (event) => {
    //   var auth_service = authService;
    //   auth_service.login(
    //                 event.currentTarget.textContent
    //               )
    //               .then((result) => {
    //                 if(result != undefined){
  
    //                 }
    //                 console.log(result);
    //               })
    //               .catch(e => {
    //                 console.log("throw error!!!" + e);
    //               });
                  
    // }
    // const onLogout = onLogout;
    
      <Modal
        // {...props}
        show="true"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title 
            id="contained-modal-title-vcenter"
            className='custom-modal'
          >
            <div>
              {true && <button className='onLogout' onClick={(e) => clickEvent(e)}>LOGOUT</button>}
              <img src='./images/favor.png'></img>
            </div>
            <div>
              <h3>Make FavorVideo Cards </h3>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          className='custom-modal'
          onClick={(e) => e.stopPropagation()}
        >
          <h4>LOGIN</h4>
          <Button
            className='Google'
            onClick={(e) => clickEvent(e)}
          >
            Google
          </Button>
          <Button
            className='Git'
            onClick={(e) => clickEvent(e)}
          >
            Git
          </Button>
          <Button
            className='Email'
            onClick={(e) => clickEvent(e)}
          >
            Email
          </Button>
        </Modal.Body>
        <Modal.Footer
          onClick={(e) => e.stopPropagation()}
        >
          <Button className='custom-modal-close' onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );

  export default LoginModal;