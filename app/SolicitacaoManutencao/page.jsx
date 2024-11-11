'use client';
import styles from "./page.module.css"
import Footer from "../components/footer/page.jsx"
import PopupMessage from '../components/PopUp/PopUp';
import { useEffect, useState } from "react"
import SideBar from "../components/SideBar/page";

function Manutencao() {
    const [popup, setPopup] = useState({ visible: false, message: '', type: '' });

    useEffect(() => {
        // Recuperar o nome do responsável do localStorage
        const nomeDoResponsavel = localStorage.getItem('email');
        const numeroDePatrimonio = localStorage.getItem('numero_de_patrimonio');
        const today = new Date();
        if (nomeDoResponsavel) {
            setMaquina(prevState => ({
                ...prevState,
                nome: nomeDoResponsavel
            }));
        }
        if (numeroDePatrimonio) {
            setMaquina(prevState => ({
                ...prevState,
                numero_de_patrimonioID: numeroDePatrimonio
            }));
        }
        setMaquina(prevState => ({
            ...prevState,
            data_de_solicitacao: today.toISOString().split('T')[0]
        }));
    }, []);
    const [maquina, setMaquina] = useState({
        numero_de_patrimonioID: '',
        nome: '',
        causa_do_problema: '',
        descricao: '',
        data_de_solicitacao: '',
    });



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMaquina(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handlePost = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://10.88.199.152:4000/requestmaintenance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(maquina),
            });

            if (response.ok) {
                setPopup({ visible: true, message: 'Solicitação enviada com sucesso', type: 'success' });
                setTimeout(() => {
                    setPopup({ visible: false, message: '', type: '' });
                }, 2000);
            } else {
                throw new Error('Erro ao cadastrar manutenção');
            }
        } catch (error) {
            setPopup({ visible: true, message: 'Erro ao enviar solicitação', type: 'error' });
            setTimeout(() => {
                setPopup({ visible: false, message: '', type: '' });
            }, 2000);
        }
    };

    return (
        <div className={styles.container}>
            
                <SideBar />
            
            <form className={styles.card}>
            <h1 className={styles.title}>Solicitação de Manutenção</h1>
                <div className={styles.inputsContainer}>

                    <input
                        type="text"
                        name="numero_de_patrimonioID"
                        value={maquina.numero_de_patrimonioID}
                        onChange={handleInputChange}
                        placeholder="Número de Patrimônio"
                        className={styles.input}
                    />
                    <input
                        type="text"
                        name="nome"
                        value={maquina.nome}
                        onChange={handleInputChange}
                        placeholder="Nome"
                        className={styles.input}
                    />
                    <input
                        type="text"
                        name="causa_do_problema"
                        value={maquina.causa_do_problema}
                        onChange={handleInputChange}
                        placeholder="Causa do Problema"
                        className={styles.input}
                    />
                    <input
                        type="text"
                        name="descricao"
                        value={maquina.descricao}
                        onChange={handleInputChange}
                        placeholder="Descrição"
                        className={styles.input}
                    />
                    <input
                        type="date"
                        name="data_de_solicitacao"
                        value={maquina.data_de_solicitacao}
                        onChange={handleInputChange}
                        placeholder="Data da Solicitação"
                        className={styles.input}
                    />
                    
                    {popup.visible && <PopupMessage message={popup.message} type={popup.type} />}
                    <button className={styles.button} onClick={handlePost}>Enviar Solicitação</button>
                </div>
            </form>

            <a href='./Servico'>
                    <div className={styles.backbutton}>
                        <p>Voltar para Serviços</p>
                    </div>
                </a>

            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    )
}

export default Manutencao;