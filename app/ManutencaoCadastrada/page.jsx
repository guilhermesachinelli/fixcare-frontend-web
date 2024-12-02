'use client';
import { useState, useEffect } from 'react';
import styles from "./page.module.css";
import Footer from "../components/footer/page.jsx";
import HeaderIB from '../components/HeaderIB/page';

function ManutencaoCadastrada() {
    const [maquina, setMaquina] = useState(null);

    useEffect(() => {
        const fetchMaquina = async () => {
            const id = new URLSearchParams(window.location.search).get('id');
            if (id) {
                const response = await fetch(`http://10.88.200.152:4000/manutencao/${id}`, {
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
            
            <HeaderIB />                <a href='./Manutencoes'>
                    <div className={styles.backbutton}>
                        <p>⬅</p>
                    </div>
                </a>
            <div className={styles.content}>
            <div className={styles.Cards}>
                <h1 className={styles.titulo}>Detalhes da Manutenção</h1>
</div>
                <div className={styles.CardsRow}>
                    <div>
                    <div className={styles.Cards}>
                    <img src="/ferramentas.png" className={styles.ImgTorno}/>
                    </div>
                    </div>
                    <div className={styles.Card}>
                    <h2 className={styles.titulo}>{maquina.nome_do_responsavel} - {maquina.tipo_de_manutencao}</h2>
                    <p className={styles.subtitulo}>Descrição: {maquina.descricao}</p>
                    <p className={styles.subtitulo}>Número de Patrimônio: {maquina.numero_de_patrimonioid}</p>
                    <p className={styles.subtitulo}>Data de Aquisição: {maquina.data_de_manutencao}</p>
                    </div>
                </div>
            </div>
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    );
}

export default ManutencaoCadastrada;