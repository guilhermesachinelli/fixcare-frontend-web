'use client'
import React, { useState } from 'react';
import styles from "./page.module.css"
import Header from "../components/header/page.jsx"
import Footer from "../components/footer/page.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Adm() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassaworVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Header />
            </header>

            <div className={styles.Card}>
                <img className={styles.logoSenai} src="/senaiLogo.png" />
                <div className={styles.inputsContainer}>
                    <div className={styles.inputWrapper}>
                        <input className={styles.input} type="text" placeholder="E-mail" />
                    </div>
                    <div className={styles.inputWrapper}>
                        <input className={styles.input} 
                        type={showPassword ? "text" : "password"} 
                        placeholder='Senha'
                        />
                        <button
                        type="button"
                        className={styles.toggleButton}
                        onClick={togglePassaworVisibility}
                        >
                            <FontAwesomeIcon className={styles.icon} icon={showPassword ? faEyeSlash : faEye} />
                        </button>
                    </div>
                </div>

                <div className={styles.buttonContainer}>
                    <button className={styles.buttonText}>Entrar</button>
                </div>
            </div>

            <div className={styles.buttonContainer}>
                <button className={styles.buttonText2}>Conhecer os Desenvolvedores</button>
                </div>

            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    )
}

export default Adm;