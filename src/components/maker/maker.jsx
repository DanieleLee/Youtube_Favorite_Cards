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
    const [cards, setCards] = useState({
        '1': {
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
        '2': {
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
        '3': {
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
    });
  
    useEffect(() => {
        props.authservice.onAuthChanged(user => {
            if(!user){
                props.nav('/');
            }
        })

    });

    const addCard = (card) => {
        const updated = [...cards, card];
        setCards(updated);
        // console.log(cards);
    }

    const createOrUpdateCard = (card) => {
        // const updated = {...cards};
        // updated[card.id] = card;
        // setCards(updated);
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        });
    }

    const deleteCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
    }
    return(
        <section className={styles.maker}>
            <Header onlogout={props.onclick}></Header>
            <div className={styles.container}>
                <Editor FileInput = {props.FileInput} cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard}/>
                <Preview cards={cards}/>

            </div>
        </section>
    )
  
};

export default Maker;