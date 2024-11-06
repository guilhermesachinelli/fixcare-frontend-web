'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from "./page.module.css";
import Footer from "../components/footer/page.jsx";
import Header from "../components/header/page.jsx";
import PopupMessage from '../components/PopUp/PopUp';

function Page() {
    const [popup, setPopup] = useState({ visible: false, message: '', type: '' });
    const [data, setData] = useState([]);
    const [patrimonioFiltro, setPatrimonioFiltro] = useState('');

    useEffect(() => {
        fetchMaquinas();
    }, []);

    const fetchMaquinas = async () => {
        try {
            const response = await fetch('http://10.88.200.152:4000/machine', {
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

    const fetchMaquinaByPatrimonio = async (numeroDePatrimonio) => {
        try {
            const response = await fetch(`http://10.88.200.152:4000/machine/patrimonio/${numeroDePatrimonio}`, {
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
                setPopup({ visible: true, message: 'Máquina não encontrada', type: 'error' });
                setTimeout(() => {
                    setPopup({ visible: false, message: '', type: '' });
                }, 4000);
            } else {
                setPopup({ visible: true, message: 'Máquina encontrada com sucesso', type: 'success' });
                setTimeout(() => {
                    setPopup({ visible: false, message: '', type: '' });
                }, 4000);
            }
        } catch (error) {
            console.log("Erro ao buscar dados:", error);
            setPopup({ visible: true, message: 'Erro ao buscar máquina', type: 'error' });
            setTimeout(() => {
                setPopup({ visible: false, message: '', type: '' });
            }, 4000);
        }
    };

    const handleFilterChange = (e) => {
        setPatrimonioFiltro(e.target.value);
    };

    const handleFilter = (e) => {
        e.preventDefault();
        fetchMaquinaByPatrimonio(patrimonioFiltro);
    };

    return (
        <div className={styles.container}>
            
                <Header />
            
            
                <div className={styles.Center}>
            <form onSubmit={handleFilter} className={styles.searchForm}>
                        <input
                            type="text"
                            value={patrimonioFiltro}
                            onChange={handleFilterChange}
                            placeholder="Pesquisar máquinas por número de patrimônio"
                            className={styles.searchInput}
                        />
                        <button type="submit" className={styles.searchButton}>Buscar</button>
                    </form>
                </div>
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