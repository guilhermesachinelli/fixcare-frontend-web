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
                setPopup({ visible: true, message: 'Maquina Encontrada', type: 'success' });
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
                    {
                        maquina.map((maquina) => (
                            <div key={maquina.id}>
                                <div className={styles.CardsRow}>
                                <div>
                                <img className={styles.ImgTorno} src="/torno.png" />
                                </div>
                                <div className={styles.Card}>
                                <h1 className={styles.titulo}>Marca: {maquina.marca}</h1>
                                <h4 className={styles.titulo}>Categoria: {maquina.categoria}</h4>
                                <h4 className={styles.titulo}>Modelo: {maquina.modelo}</h4>
                                <h4 className={styles.titulo}>Número de Patrimonio:{maquina.numero_de_patrimonio}</h4>
                                <h4 className={styles.titulo}>Numero de Serie: {maquina.numero_de_serie}</h4>
                                <h4 className={styles.titulo}>Número do Torno: {maquina.numero_do_torno}</h4>
                                <h4 className={styles.titulo}>Data de Aquisicao: {maquina.data_de_aquisicao}</h4>
                                <h4 className={styles.titulo}>Data da Ultima Troca de Oleo: {maquina.data_da_ultima_troca_de_oleo}</h4>
                                </div>
                                </div>
                            </div>
                        ))
                    }
            {popup.visible && <PopupMessage message={popup.message} type={popup.type} />}
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    );
}

export default MaquinaCadastrada;