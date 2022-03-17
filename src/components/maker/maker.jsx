import React, { useEffect, useState } from 'react';
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
    const [cards, setCards] = useState([
        {
            id: '1',
            name: 'Daniele',
            company: 'MicroSoft',
            theme: 'dark',
            title: 'Software Engineer',
            email: 'daniele@gmail.com',
            message: 'go together',
            fileName: 'untitle1',
            fileURL: null

        },
        {
            id: '2',
            name: 'Daniele2',
            company: 'Google',
            theme: 'colorful',
            title: 'Software Engineer',
            email: 'daniele2@gmail.com',
            message: 'go together',
            fileName: 'untitle1',
            fileURL: ''

        },
        {
            id: '3',
            name: 'Daniele3',
            company: 'Netmable',
            theme: 'light',
            title: 'Software Engineer',
            email: 'daniele3@gmail.com',
            message: 'go together',
            fileName: 'untitle1',
            fileURL: ''

        }
    ]);
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
                <Editor cards={cards}/>
                <Preview cards={cards}/>

            </div>
        </section>
    )
  
};

export default Maker;