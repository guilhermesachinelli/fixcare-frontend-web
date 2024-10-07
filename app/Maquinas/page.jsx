'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from "./page.module.css"
import Footer from "../components/footer/page.jsx"
import Header from "../components/header/page.jsx"
import PopupMessage from '../components/PopUp/PopUp';

function Page() {
    const [popup, setPopup] = useState({ visible: false, message: '', type: '' });
    const [data, setData] = useState([]);
    const [buscar, setBuscar] = useState('');

    useEffect(() => {
        fetchMaquinas();
    }, []);

    const fetchMaquinas = async () => {
        try {
            const response = await fetch(`http://10.88.199.223:4000/machine`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error('Erro na resposta da API');
            }

            const result = await response.json();
            setData(result);
            if (result.length === 0) {
                setPopup({ visible: true, message: 'Nenhuma máquina encontrada', type: 'error' });
                setTimeout(() => {
                    setPopup({ visible: false, message: '', type: '' });
                }, 4000);
            } else {
                setPopup({ visible: true, message: 'Máquinas carregadas com sucesso', type: 'success' });
                setTimeout(() => {
                    setPopup({ visible: false, message: '', type: '' });
                }, 4000);
            }
        } catch (error) {
            console.log("Erro ao buscar dados:", error);
            setPopup({ visible: true, message: 'Erro ao buscar máquinas', type: 'error' });
            setTimeout(() => {
                setPopup({ visible: false, message: '', type: '' });
            }, 4000);
        }
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Header />
            </header>
            <div className={styles.Cards}>
                <div className={styles.CardsRow}>
                    
                    {data.map((maquina) => (
                        <Link
                            key={maquina.id}
                            href={`/MaquinaCadastrada?id=${maquina.id}`}
                        >
                            <div className={styles.Corretiva}>
                                <img className={styles.corretiva} src="/torno.png" />
                                <h1 className={styles.titulo}>{maquina.marca}</h1>
                                <h1 className={styles.titulo}>{maquina.modelo}</h1>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            {popup.visible && <PopupMessage message={popup.message} type={popup.type} />}
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    );
}

export default Page;