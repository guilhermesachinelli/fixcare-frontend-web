import React from 'react';
import styles from './page.module.css';

const Header = () => (
    <header>
        <div className={styles.header}>
            <div className={styles.title}>
                <a href='./' >
            <img className={styles.logo} src='/fixcare.png' alt='Logo' width={80} height={80} />
            </a>
            </div>
            
              
        <div className={styles.navegar}>
              <a href='./DocGeral' >
                    <h1 className={styles.titulo}>Documentação</h1>
                </a>
           {/* <a href="./batalha" >
                <h1 className={styles.titulo}>Máquinas</h1>
            </a>
            <a href='./personagens' >
                <h1 className={styles.titulo}>Serviços</h1>
            </a>
            <a href='./pessoa' >
                <h1 className={styles.titulo}>Administração</h1>
            </a>
            */}

            </div>
        </div>
    </header>
);

//exportando o componente Header
export default Header;