'use client';
import { useState, useEffect } from 'react';
import styles from "./page.module.css";
import Header from "../components/header/page.jsx";
import Footer from "../components/footer/page.jsx";
import HeaderIB from '../components/HeaderIB/page';

function ExibiSolideManutencaoCadas() {
    const [maquina, setMaquina] = useState(null);

    useEffect(() => {
        const fetchMaquina = async () => {
            const id = new URLSearchParams(window.location.search).get('id');
            if (id) {
                const response = await fetch(`http://10.88.200.152:4000/requestmaintenance/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                const result = await response.json();
                console.log('Dados da máquina:', result);
                setMaquina(result);
            }
        };

        fetchMaquina();
    }, []);


    if (!maquina) {
        return <div>Carregando...</div>;
    }

    return (
        <div className={styles.container}>
            
                <HeaderIB />
                <a href='./ExibiSolideManutencao'>
                    <div className={styles.backbutton}>
                        <p>⬅</p>
                    </div>
                </a>
            <div className={styles.content}>
                <h1 className={styles.titulo}>Detalhes da Manutenção</h1>

                <div className={styles.CardsRow}>
                    <div>
                    <img src="/ferramentas.png" className={styles.ImgTorno}/>
                    </div>
                    <div className={styles.Card}>
                    <h2 className={styles.titulo}>{maquina.nome} - {maquina.causa_do_problema}</h2>
                    <p className={styles.subtitulo}>Descrição: {maquina.descricao}</p>
                    <p className={styles.subtitulo}>Número de Patrimônio: {maquina.numero_de_patrimonioid}</p>
                    <p className={styles.subtitulo}>Data de Solicitação: {maquina.data_de_solicitacao}</p>
                    <p className={styles.subtitulo}>
                        Status: {maquina.status ? '✔️' : '❌'}
                    </p>
                    </div>
                </div>
            </div>
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    );
}

export default ExibiSolideManutencaoCadas;