"use client";
import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './page.module.css';
import Header from '../components/header/page.jsx';
import Footer from '../components/footer/page.jsx';

function MaquinaCadastrada() {
    const { maquina } = location.state || {};

    if (!maquina) {
        return <div>Informações da máquina não disponíveis</div>;
    }

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
                        {/* Adicione mais detalhes conforme necessário */}
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