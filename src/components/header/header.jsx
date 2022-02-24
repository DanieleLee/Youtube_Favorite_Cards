import React from 'react';
import styles from './header.module.css';

const Header = (props) => (
  
    <header className={styles.header}>
      
      <button className={styles.logout} onClick={ props.onlogout}>
        Logout
      </button>

      <img className={styles.logo} src="/images/logo.png" alt="logo" />
      <h1 className={styles.title}>Business Card Maker</h1>
    </header>
);

export default Header;
