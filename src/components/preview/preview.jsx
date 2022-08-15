import React from 'react';
import Card from '../card/card';
import styles from './preview.module.css';

const Preview = ({cards, clickEvent}) => 
<section className={styles.preview}>
    <div>
        <h1 className={styles.title}>Card Preview
            <span className={styles.header_section}></span>
        </h1>
    </div>
    <div>
        <ul className={styles.cards}>
            {
                Object.keys(cards).map(key => (
                    <Card key={key} card={cards[key]} clickEvent={clickEvent}/>    
                ))
            }
        </ul>
    </div>
</section>
export default Preview;