'use client';
import React, { useState, useEffect } from 'react';
import styles from "./page.module.css";
import Header from "../components/header/page.jsx";
import Footer from "../components/footer/page.jsx";
import PopupMessage from '../components/PopUp/PopUp';

function MaquinaCadastrada() {
    const [maquina, setMaquina] = useState(null);
    const [popup, setPopup] = useState({ visible: false, message: '', type: '' });

    useEffect(() => {
        const fetchMaquina = async () => {
            const id = new URLSearchParams(window.location.search).get('id');
            if (id) {
                const response = await fetch(`http://10.88.199.223:4000/machine/${id}`, {
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
            const response = await fetch(`http://10.88.199.223:4000/machine/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.ok) {
                setPopup({ visible: true, message: 'Máquina excluída com sucesso', type: 'success' });
                setTimeout(() => {
                    setPopup({ visible: false, message: '', type: '' });
                    window.location.href = '/'; // Redirecionar para a página inicial após exclusão
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
        const queryParams = new URLSearchParams(maquina).toString();
        window.location.href = `/CadastroMaquinas?id=${id}&${queryParams}`;
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
                <h1>Detalhes da Máquina</h1>
                <div>
                    <h2>{maquina.marca} - {maquina.modelo}</h2>
                    <p>Categoria: {maquina.categoria}</p>
                    <p>Número de Patrimônio: {maquina.numero_de_patrimonio}</p>
                    <p>Número de Série: {maquina.numero_de_serie}</p>
                    <p>Número do Torno: {maquina.numero_do_torno}</p>
                    <p>Data de Aquisição: {maquina.data_de_aquisicao}</p>
                    <p>Data da Última Troca de Óleo: {maquina.data_da_ultima_troca_de_oleo}</p>
                    <button onClick={handleEdit}>Editar</button>
                    <button onClick={handleDelete}>Excluir</button>
                </div>
            </div>
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    );
}

export default MaquinaCadastrada;