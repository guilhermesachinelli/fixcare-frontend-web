"use client";
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import Header from '../../components/header/page.jsx';
import Footer from '../../components/footer/page.jsx';
import React, { useState, useEffect } from 'react';

function MaquinaCadastrada() {
    const [maquina, setMaquina] = useState(null);

    const router = useRouter();

    const { id } = router.query;

    useEffect(() => {
        const fetchMaquina = async () => {
            try {
                const response = await fetch(`http://10.88.200.139:4000/machine/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                const result = await response.json();
                setMaquina(result);
            } catch (error) {
                console.error('Erro ao buscar os dados da máquina:', error);
            }
        };
        fetchMaquina();
    }, [id]);

    if (!maquina) {
        return <div>Carregando...</div>;
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