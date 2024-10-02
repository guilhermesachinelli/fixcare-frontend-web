"use client";
import styles from './page.module.css';
import { useSearchParams } from 'next/navigation';
import Header from '../components/header/page.jsx';
import Footer from '../components/footer/page.jsx';
import React, { useState, useEffect } from 'react';
import PopupMessage from '../components/PopUp/PopUp';

function MaquinaCadastrada() {
    const [maquina, setMaquina] = useState([]);
    const [popup, setPopup] = useState({ visible: false, message: '', type: '' });
    

    const search = useSearchParams();

    const id = search.get("id");
    console.log(id);
    useEffect(() => {
        const fetchMaquinas = async () => {
            const response = await fetch(`http://10.88.199.223:4000/machine/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const result = await response.json();
            setMaquina(result);
            console.log(result);
            if (result == []) {
                setPopup({ visible: true, message: 'Maquina não Encontrada', type: 'error' });
                setTimeout(() => {
                    setPopup({ visible: false, message: '', type: '' });
                }, 4000);
            } else {
                setPopup({ visible: true, message: 'Maquinas Encontrada', type: 'success' });
                setTimeout(() => {
                    setPopup({ visible: false, message: '', type: '' });
                }, 4000);
            }
        };

        fetchMaquinas();
    },[id]);

    console.log(maquina);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Header />
            </header>
            <div className={styles.Cards}>
                <div className={styles.CardsRow}>
                    <div className={styles.Corretiva}>
                        <img className={styles.corretiva} src="/torno.png" alt="Imagem da máquina" />
                        <h1 className={styles.titulo}>Marca: {maquina.marca}</h1>
                        <h1 className={styles.titulo}>Modelo: {maquina.modelo}</h1>
                        <h1 className={styles.titulo}>Número de Patrimônio: {maquina.numero_de_patrimonio}</h1>
                    </div>
                </div>
            </div>
            {popup.visible && <PopupMessage message={popup.message} type={popup.type} />}
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    );
}

export default MaquinaCadastrada;