import React, { useEffect, useState } from 'react';
import { useLocation} from 'react-router-dom';
import Editor from '../editor/editor';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = (props) => {
    const location = useLocation();
    const historyState = location.state;
    // const onLogout = () => {
    //     service.logout();
    //     navigate(-1);
    // }
    const [cards, setCards] = useState({});
    const [userId, setUserId] = useState(historyState && historyState.userId);
    
    useEffect(() => {
        if(!userId){
            return;
        }
        const stopSync = props.cardRepository.syncCards(userId, cards => {
            setCards(cards);
        });
        return () => stopSync();
    }, [userId]);
    useEffect(() => {
        props.authservice.onAuthChanged(user => {
            if(user){
                setUserId(user.uid);
            }else{
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
        props.cardRepository.saveCard(userId, card);
    }

    const deleteCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
        props.cardRepository.removeCard(userId,card);
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