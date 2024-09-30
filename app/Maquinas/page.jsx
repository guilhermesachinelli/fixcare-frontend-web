'use client'
import React, { useState, useEffect} from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import styles from "./page.module.css"
import Footer from "../components/footer/page.jsx"
import Header from "../components/header/page.jsx"
import PopupMessage from '../components/PopUp/PopUp';

function page() {
    const [popup, setPopup] = useState({ visible: false, message: '', type: '' });
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMaquinas = async () => {
            const response = await fetch('http://10.88.200.139:4000/machine', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const result = await response.json();
            setData(result);
            if (result.length === 0) {
                setPopup({ visible: true, message: 'Maquinas API sem registros', type: 'error' });
                setTimeout(() => {
                    setPopup({ visible: false, message: '', type: '' });
                }, 4000);
            } else {
                setPopup({ visible: true, message: 'Maquinas API Funcionando', type: 'success' });
                setTimeout(() => {
                    setPopup({ visible: false, message: '', type: '' });
                }, 4000);
            }
        };

        fetchMaquinas();
    }, []);
    console.log(data);

    const handleCardClick = (maquina) => {
        navigate('/MaquinaCadastrada', { state: { maquina } });
    };

    return (
        <BrowserRouter>
        <div className={styles.container}>
            <header className={styles.header}>
                <Header />
            </header>
            <div className={styles.Cards}>
                <div className={styles.CardsRow}>

                    {data.map((maquina) => (
                       <div 
                       key={maquina.id} 
                       className={styles.Corretiva} 
                       onClick={() => handleCardClick(maquina)}
                   >
                            <div className={styles.Corretiva}>
                                <img className={styles.corretiva} src="/torno.png" />
                                <h1 className={styles.titulo}>{maquina.marca}</h1>
                                <h1 className={styles.titulo}>{maquina.modelo}</h1>

                            </div>
                        </div>

                    ))}
                </div>
            </div>
            {popup.visible && <PopupMessage message={popup.message} type={popup.type} />}
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
        </BrowserRouter>
    )
}

export default page;