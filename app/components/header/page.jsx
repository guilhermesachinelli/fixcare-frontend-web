'use client';
import React from 'react';
import styles from './page.module.css';

const Header = () => {

  return (
    <header className={styles.header}>
      
      <div className={styles.title}>
        <a href='./'> 
        <img className={styles.titulo} src='/senaiLogo.png' alt='Logo' width={140} height={80} />
        </a>
      </div>

      <div className={styles.links}>
        <a href='./LoginServicos'>
        <p>Login</p>
        </a>
        <div className={styles.link}>
        <a href='./Adm'>
        <p>Administração</p>
        </a>
        </div>
      </div>
    </header>
  );
};

export default Header;