'use client';
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      
      <div className={styles.title}>
        <a href='./'> 
        <img className={styles.titulo} src='/senaiLogo.png' alt='Logo' width={140} height={80} />
        </a>
      </div>

      <div className={styles.lins}>
        <a href='./LoginServicos'>
        <p>login</p>
        </a>
        <a href='./Adm'>
        <p>Adiministração</p>
        </a>
      </div>
    </header>
  );
};

export default Header;