import React from 'react';
import styles from './header.module.css';

const Header = (props) => (
  
    <header className={styles.header}>
      

      <button className='onLogout' onClick={(e) => props.onlogout(e)}>LOGOUT</button>
      <img className={styles.logo} src="./images/favor.png" alt="logo" />
      <h1 className={styles.title}>Youtube Favorite Cards</h1>
    </header>
);

export default Header;
