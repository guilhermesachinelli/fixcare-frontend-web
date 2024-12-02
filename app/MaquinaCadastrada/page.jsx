'use client';
import React, { useState, useEffect } from 'react';
import styles from "./page.module.css";
import Header from "../components/header/page.jsx";
import Footer from "../components/footer/page.jsx";
import PopupMessage from '../components/PopUp/PopUp';
import HeaderIB from '../components/HeaderIB/page';


function MaquinaCadastrada() {
    const [maquina, setMaquina] = useState(null);
    const [popup, setPopup] = useState({ visible: false, message: '', type: '' });

    useEffect(() => {
        const fetchMaquina = async () => {
            const id = new URLSearchParams(window.location.search).get('id');
            if (id) {
                const response = await fetch(`http://10.88.200.152:4000/machine/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                const result = await response.json();
                setMaquina(result);
            }
        };

        fetchMaquina();
    }, []);

    const handleDelete = async () => {
        const id = new URLSearchParams(window.location.search).get('id');
        try {
            const response = await fetch(`http://10.88.200.152:4000/machine/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.ok) {
                setPopup({ visible: true, message: 'Máquina excluída com sucesso', type: 'success' });
                setTimeout(() => {
                    setPopup({ visible: false, message: '', type: '' });
                    window.location.href = '/Maquinas'; 
                }, 2000);
            } else {
                throw new Error('Erro ao excluir máquina');
            }
        } catch (error) {
            setPopup({ visible: true, message: error.message, type: 'error' });
            setTimeout(() => {
                setPopup({ visible: false, message: '', type: '' });
            }, 2000);
        }
    };

    const handleEdit = () => {
        const id = new URLSearchParams(window.location.search).get('id');
        window.location.href = `/CadastroMaquinas?id=${id}`;
    };

    if (!maquina) {
        return <div>Carregando...</div>;
    }

    return (
        <div className={styles.container}>
            
            <HeaderIB />                <a href='./Maquinas'>
                    <div className={styles.backbutton}>
                        <p>⬅</p>
                    </div>
                </a>
            <div className={styles.content}>
                {popup.visible && <PopupMessage message={popup.message} type={popup.type} />}
                <div className={styles.Cards}>
                <h1 className={styles.titulo}>Detalhes da Máquina</h1>
                </div>

                <div className={styles.CardsRow}>
                    <div>
                    <img src="/tornoNardini.png" className={styles.ImgTorno}/>
                    </div>
                    <div className={styles.Card}>
                    <h2 className={styles.titulo}>{maquina.marca} - {maquina.modelo}</h2>
                    <p className={styles.subtitulo}>Categoria: {maquina.categoria}</p>
                    <p className={styles.subtitulo}>Número de Patrimônio: {maquina.numero_de_patrimonio}</p>
                    <p className={styles.subtitulo}>Número de Série: {maquina.numero_de_serie}</p>
                    <p className={styles.subtitulo}>Número do Torno: {maquina.numero_do_torno}</p>
                    <p className={styles.subtitulo}>Data de Aquisição: {maquina.data_de_aquisicao}</p>
                    </div>
                </div>
            </div>
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    );
}

export default MaquinaCadastrada;