import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Editor from '../editor/editor';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = (props) => {
    const location = useLocation();
    // const onLogout = () => {
    //     service.logout();
    //     navigate(-1);
    // }

    useEffect(() => {
        props.authservice.onAuthChanged(user => {
            if(!user){
                props.nav('/');
            }
        })

    });

    return(
        <section className={styles.maker}>
            <Header onlogout={props.onclick}></Header>
            <div className={styles.container}>
                <Editor />
                <Preview />

            </div>
        </section>
    )
  
};

export default Maker;