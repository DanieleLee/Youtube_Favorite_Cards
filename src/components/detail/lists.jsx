import React, { Component, useState } from 'react';
import List from './list';
import styles from './lists.module.css';

const Lists = ({youList, onVideoClick, display, FontAwesomeIcon}) => {
        
    // if(loading) return <p>Loading....</p>

    if(youList == undefined)
        return false;
 
        return(
            
            <div className={styles.cards}>
                <div className={styles.cards__container}>
                    <div className={styles.cards__wrapper}>
                        <ul className={styles.cards__items}>
                            {youList.map((item,idx) => (
                                <List 
                                    key={item.id}
                                    item = {item}
                                    onVideoClick = {onVideoClick}
                                    display = {display}
                                    FontAwesomeIcon = {FontAwesomeIcon}
                                />
                            ))}
                        
                        </ul>
                    </div>
                </div>
            </div>           
        ); 
 
}

export default Lists;