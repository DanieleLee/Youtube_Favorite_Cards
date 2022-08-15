import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({FileInput, cards, addCard, updateCard, deleteCard}) => 
<section className={styles.editor}>
    <div>
        <h1 className={styles.title}>Cards
            <span className={styles.header_section}></span>
        </h1> 
    </div>
    <div>
    {Object.keys(cards).map(key => (
        <CardEditForm key={key} FileInput={FileInput} card={cards[key]} updateCard={updateCard} deleteCard={deleteCard}/>
    ))}
    <CardAddForm FileInput={FileInput} onAdd={addCard}/>
    </div>
</section>

export default Editor;