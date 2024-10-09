'use client';
import React, { useState } from 'react';
import styles from './page.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.menuButton} onClick={toggleMenu}>
        ☰
      </div>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.closeButton} onClick={toggleMenu}>
          ✖
        </div>
        <nav className={styles.nav}>
          <a href="./" className={styles.navItem}>Home</a>
          <a href="./DocGeral" className={styles.navItem}>Documentação</a>
          <a href="./Maquinas" className={styles.navItem}>Máquinas</a> 
          <a href="./LoginServicos" className={styles.navItem}>Login</a>
          <a href="./Adm" className={styles.navItem}>Administração</a>
        </nav>
      </div>
      <div className={styles.title}>
        <a href='./'> 
        <img className={styles.titulo} src='/senaiLogo.png' alt='Logo' width={140} height={80} />
        </a>
      </div>
    </header>
  );
};

export default Header;