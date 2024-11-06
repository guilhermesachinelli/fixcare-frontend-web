'use client'
import React, { useState } from 'react';
import styles from "./page.module.css"
import Header from "../components/header/page.jsx"
import Footer from "../components/footer/page.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import PopupMessage from '../components/PopUp/PopUp';
function LoginServicos() {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [popup, setPopup] = useState({ visible: false, message: '', type: '' });
    
    const fetchLogin = async (e) => {
        e.preventDefault();
        
        const response1 = await fetch('http://10.88.200.139:4000/aluno', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                senha: password,
            }),
        });
        const response2 = await fetch('http://10.88.200.139:4000/funcionario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                senha: password,
            }),
        });
        const data = await response1.json() || await response2.json();
        console.log(data.length);
        if (data.length === 1) {
            setPopup({ visible: true, message: 'Login efetuado com sucesso', type: 'success' });
            setTimeout(() => {
                window.location.href = '/Servico';
            }
                , 2000);
        } else {
            setPopup({ visible: true, message: 'Email ou senha incorretos', type: 'error' });
            setTimeout(() => {
                setPopup({ visible: false, message: '', type: '' });
            }
                , 2000);
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
                                className={styles.input2}
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
                    {popup.visible && <PopupMessage message={popup.message} type={popup.type} />}
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
export default LoginServicos;