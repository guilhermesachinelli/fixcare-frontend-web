'use client';
import React, { useState, useEffect } from 'react';
import styles from "./page.module.css";
import Header from "../components/header/page.jsx";
import Footer from "../components/footer/page.jsx";
import PopupMessage from '../components/PopUp/PopUp';


function ManutencaoCadastrada() {
    const [maquina, setMaquina] = useState(null);
    const [popup, setPopup] = useState({ visible: false, message: '', type: '' });

    useEffect(() => {
        const fetchMaquina = async () => {
            const id = new URLSearchParams(window.location.search).get('id');
            if (id) {
                const response = await fetch(`http://10.88.199.223:4000/manutencao/${id}`, {
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
            const response = await fetch(`http://10.88.199.223:4000/manutencao/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.ok) {
                setPopup({ visible: true, message: 'Manutenção excluída com sucesso', type: 'success' });
                setTimeout(() => {
                    setPopup({ visible: false, message: '', type: '' });
                    window.location.href = '/Manutencoes'; // Redirecionar para a página inicial após exclusão
                }, 2000);
            } else {
                throw new Error('Erro ao excluir Manutenção');
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
        window.location.href = `/Manutencao?id=${id}`;
    };

    if (!maquina) {
        return <div>Carregando...</div>;
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Header />
            </header>
            <div className={styles.content}>
                {popup.visible && <PopupMessage message={popup.message} type={popup.type} />}
                <h1 className={styles.titulo}>Detalhes da Manutenção</h1>

                <div className={styles.CardsRow}>
                    <div>
                    <img src="/ferramentas.png" className={styles.ImgTorno}/>
                    </div>
                    <div className={styles.Card}>
                    <h2 className={styles.titulo}>{maquina.nome_do_responsavel} - {maquina.tipo_de_manutencao}</h2>
                    <p className={styles.subtitulo}>Descrição: {maquina.descricao}</p>
                    <p className={styles.subtitulo}>Número de Patrimônio: {maquina.numero_de_patrimonioID}</p>
                    <p className={styles.subtitulo}>Data de Aquisição: {maquina.data_da_manutencao}</p>
                    <button onClick={handleEdit} className={styles.buttonText}>Editar</button>
                    <button onClick={handleDelete} className={styles.buttonText}>Excluir</button>
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