import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../header/header';
// import styles from './maker.module.css';

const Maker = (props) => {
    const location = useLocation();
    // const onLogout = () => {
    //     service.logout();
    //     navigate(-1);
    // }

    return(
        <section >
            <Header onlogout={props.onclick}></Header>
        </section>
    )
  
};

export default Maker;