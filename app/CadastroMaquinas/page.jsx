'use client';
import React, { useState, useEffect } from 'react';
import styles from "./page.module.css";
import Header from "../components/header/page.jsx";
import Footer from "../components/footer/page.jsx";
import PopupMessage from '../components/PopUp/PopUp';

function CadastrarMaquinas() {
    const [maquina, setMaquina] = useState({
        categoria: '',
        marca: '',
        modelo: '',
        numero_de_patrimonio: '',
        numero_de_serie: '',
        numero_do_torno: '',
        data_de_aquisicao: '',
        data_da_ultima_troca_de_oleo: ''
    });
    const [editMode, setEditMode] = useState(false);
    const [popup, setPopup] = useState({ visible: false, message: '', type: '' });

    useEffect(() => {
        const id = new URLSearchParams(window.location.search).get('id');
        if (id) {
            const params = new URLSearchParams(window.location.search);
            const maquinaData = {
                categoria: params.get('categoria'),
                marca: params.get('marca'),
                modelo: params.get('modelo'),
                numero_de_patrimonio: params.get('numero_de_patrimonio'),
                numero_de_serie: params.get('numero_de_serie'),
                numero_do_torno: params.get('numero_do_torno'),
                data_da_ultima_troca_de_oleo: params.get('data_da_ultima_troca_de_oleo') ? formatDate(params.get('data_da_ultima_troca_de_oleo')) : '',
                data_de_aquisicao: params.get('data_de_aquisicao') ? formatDate(params.get('data_de_aquisicao')) : '',
            };
            console.log('maquinaData', maquinaData);
            setMaquina(maquinaData);
            setEditMode(true);
        }

        console.log(maquina);
        
    }, []);

    const formatDate = (dateString) => {
        console.log('dateString', dateString);
        
        const date = new Date(dateString);
        if (!isNaN(date.getTime())) {
            return date.toISOString().split('T')[0];
        }
        return '';
    };

    const handleSaveEdit = async () => {
        const id = new URLSearchParams(window.location.search).get('id');
        try {
            const response = await fetch(`http://10.88.199.223:4000/machine/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(maquina),
            });

            if (response.ok) {
                setPopup({ visible: true, message: 'Máquina editada com sucesso', type: 'success' });
                setTimeout(() => {
                    setPopup({ visible: false, message: '', type: '' });
                    window.location.href = `/MaquinaCadastrada?id=${id}`;
                }, 2000);
            } else {
                throw new Error('Erro ao editar máquina');
            }
        } catch (error) {
            setPopup({ visible: true, message: 'Erro ao editar máquina', type: 'error' });
            setTimeout(() => {
                setPopup({ visible: false, message: '', type: '' });
            }, 2000);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMaquina({ ...maquina, [name]: value });
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Header />
            </header>
            <div className={styles.content}>
                {popup.visible && <PopupMessage message={popup.message} type={popup.type} />}
                <h1>{editMode ? 'Editar Máquina' : 'Cadastrar Máquina'}</h1>
                <form>
                    <input
                        type="text"
                        name="categoria"
                        value={maquina.categoria}
                        onChange={handleChange}
                        placeholder="Categoria"
                    />
                    <input
                        type="text"
                        name="marca"
                        value={maquina.marca}
                        onChange={handleChange}
                        placeholder="Marca"
                    />
                    <input
                        type="text"
                        name="modelo"
                        value={maquina.modelo}
                        onChange={handleChange}
                        placeholder="Modelo"
                    />
                    <input
                        type="text"
                        name="numero_de_patrimonio"
                        value={maquina.numero_de_patrimonio}
                        onChange={handleChange}
                        placeholder="Número de Patrimônio"
                    />
                    <input
                        type="text"
                        name="numero_de_serie"
                        value={maquina.numero_de_serie}
                        onChange={handleChange}
                        placeholder="Número de Série"
                    />
                    <input
                        type="text"
                        name="numero_do_torno"
                        value={maquina.numero_do_torno}
                        onChange={handleChange}
                        placeholder="Número do Torno"
                    />
                    <input
                        type="date"
                        name="data_de_aquisicao"
                        value={maquina.data_de_aquisicao}
                        onChange={handleChange}
                        placeholder="Data de Aquisição"
                    />
                    <input
                        type="date"
                        name="data_da_ultima_troca_de_oleo"
                        value={maquina.data_da_ultima_troca_de_oleo}
                        onChange={handleChange}
                        placeholder="Data da Última Troca de Óleo"
                    />
                    {editMode && <button type="button" onClick={handleSaveEdit}>Salvar</button>}
                </form>
            </div>
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    );
}

export default CadastrarMaquinas;