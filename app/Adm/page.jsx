'use client'
import React, { useState } from 'react';
import styles from "./page.module.css"
import Footer from "../components/footer/page.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import PopupMessage from '../components/PopUp/PopUp';
import SideBar from '../components/SideBar/page.jsx';

function Adm() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [popup, setPopup] = useState({ visible: false, message: '', type: '' });

    const fetchLogin = async (e) => {
        e.preventDefault();
        
        const response = await fetch('http://10.88.199.223:4000/admin', {
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
            setPopup({ visible: true, message: 'Login efetuado com sucesso', type: 'success' });
            setTimeout(() => {
                window.location.href = '/AdmPrincipal';
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
            
            <SideBar className={styles.sidebar}>
                <SideBar />
            </SideBar>

            <div className={styles.containerlogin}>
            <div className={styles.wraplogin}>
            <form className={styles.loginform} onSubmit={fetchLogin}>
            <span className={styles.loginformtitle}>
                    <img src="/senaiLogo.png" alt="Senai Logo" />
            </span>
            <span className={styles.loginformtitle}> Administração </span>
            </div>

            <div className={styles.wrapinput}>
            <input
                                className={styles.input}
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
            <span className={styles.focusinput} data-placeholder="Email"></span>
            </div>
            
            
export default Adm;