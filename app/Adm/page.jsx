'use client'
import React, { useState } from 'react';
import styles from "./page.module.css"
import Header from "../components/header/page.jsx"
import Footer from "../components/footer/page.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Adm() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const fetchLogin = async (e) => {
        e.preventDefault();
        const response = await fetch('http://10.88.200.139:4000/admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
        senha: password,

            }),
        });

        const data = await response.json();
        console.log(data.length);
        if (data.length === 1) {
            alert('Login efetuado com sucesso');
            window.location.href = '/AdmPrincipal';
        } else {
            alert('Email ou senha incorretos');
        }
    }
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Header />
            </header>
            <form onSubmit={fetchLogin}>
            <div className={styles.Card}>
                <img className={styles.logoSenai} src="/senaiLogo.png" />
                <div className={styles.inputsContainer}>
                    <div className={styles.inputWrapper}>
                        <input 
                        className={styles.input} 
                        type="text" 
                        value={email}
                        placeholder="E-mail"
                        onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className={styles.inputWrapper}>
                        <input 
                        className={styles.input} 
                        value={password}
                        type={showPassword ? "text" : "password"} 
                        placeholder='Senha'
                        onChange={(event) => setPassword(event.target.value)}
                        />
                        <button
                        type="button"
                        className={styles.toggleButton}
                        onClick={togglePasswordVisibility}
                        >
                            <FontAwesomeIcon className={styles.icon} icon={showPassword ? faEye : faEyeSlash} />
                        </button>
                    </div>
                </div>

                <div className={styles.buttonContainer}>
                    <button className={styles.buttonText}>Entrar</button>
                </div>
            </div>
            </form>
            <div className={styles.buttonContainer}>
                <a href='./Developers'>
                <button className={styles.buttonText2}>Conhecer os Desenvolvedores</button>
                </a>
                </div>
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    )
}

export default Adm;