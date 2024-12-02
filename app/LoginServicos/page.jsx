'use client'
import React, { useState } from 'react';
import styles from "./page.module.css"
import Footer from "../components/footer/page.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import SideBar from '../components/SideBar/page.jsx';
import HeaderIB from '../components/HeaderIB/page';

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
        
        const response1 = await fetch('http://10.88.200.152:4000/aluno', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                senha: password,
            }),
        });
        const response2 = await fetch('http://10.88.200.152:4000/funcionario', {
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
              localStorage.setItem('email', email);
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

<HeaderIB/>
            
            <div className={styles.containerlogin}>
                <div className={styles.wraplogin}>
                    <form className={styles.loginform} onSubmit={fetchLogin}>
                    <span className={styles.loginformtitle}>
                            <img src="/senaiLogo.png" alt="Senai Logo" />
                    </span>
                        <span className={styles.loginformtitle}> Alunos e Funcionários </span>
                        
                        <div className={styles.wrapinput}>
                            <input
                                className={styles.input}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className={styles.focusinput} data-placeholder="Email"></span>
                        </div>
                        <div className={styles.wrapinput}>
                            <input
                                className={styles.input}
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className={styles.focusinput} data-placeholder="Password"></span>
                            <button
                                type="button"
                                className={styles.toggleButton}
                                onClick={togglePasswordVisibility}
                            >
                                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                            </button>
                        </div>
                        <div className={styles.containerloginformbtn}>
                            <button className={styles.loginformbtn}>Acessar</button>
                        </div>
                        
                    </form>
                </div>
            </div>
            <footer className={styles.footer}>
            <Footer />
            </footer>
        </div>
        
    );
}
export default LoginServicos;