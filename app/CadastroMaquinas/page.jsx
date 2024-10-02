'use client';
import styles from "./page.module.css"
import Header from "../components/header/page.jsx"
import Footer from "../components/footer/page.jsx"
import { useState } from 'react';
import PopupMessage from "../components/PopUp/PopUp";

function CadastroMaquinas() {
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [numero_de_patrimonio, setNumero_de_patrimonio] = useState('');
    const [numero_de_serie, setNumero_de_serie] = useState('');
    const [numero_do_torno, setNumero_do_torno] = useState('');
    const [data_de_aquisicao, setData_de_aquisicao] = useState('');
    const [data_da_ultima_troca_de_oleo, setData_da_ultima_troca_de_oleo] = useState('');
    const [popup, setPopup] = useState({ visible: false, message: '', type: '' });
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const clearInputs = () => {
            setMarca('');
            setModelo('');
            setCategoria('');
            setNumero_de_patrimonio('');
            setNumero_de_serie('');
            setNumero_do_torno('');
            setData_de_aquisicao('');
            setData_da_ultima_troca_de_oleo('');
        }
        
        const response = await fetch('http://10.88.199.223:4000/machine', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                categoria,
                marca,
                modelo,
                numero_de_patrimonio,
                numero_de_serie,
                numero_do_torno,
                data_de_aquisicao,
                data_da_ultima_troca_de_oleo,
            }),

        });
      
        const data = await response.json();
        console.log(categoria, marca, modelo, numero_de_patrimonio, numero_de_serie, numero_do_torno, data_de_aquisicao, data_da_ultima_troca_de_oleo);
        console.log(data);
        if (data.message) {
            setPopup({ visible: true, message: 'Erro ao Cadastrar', type: 'error' });
            setTimeout(() => {
                setPopup({ visible: false, message: '', type: '' });
            }
                , 2000);
        } else {
            setPopup({ visible: true, message: 'Cadastro efetuado com sucesso', type: 'success' });
            setTimeout(() => {
                setPopup({ visible: false, message: '', type: '' });
            }
                , 2000);
            clearInputs();
        }
    }
    return (

        <div className={styles.container}>
            <header className={styles.header}>
                <Header />
            </header>
            <form onSubmit={handleSubmit}>
                <div className={styles.Card}>                 
                    <h1 className={styles.titulo}>Cadastro de Máquinas</h1>
                    <div className={styles.inputsContainer}>
                        <div className={styles.inputWrapper}>
                            <input
                                className={styles.input}
                                type="text"
                                value={categoria}
                                placeholder="Categoria"
                                onChange={(event) => setCategoria(event.target.value)}
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <input
                                className={styles.input}
                                type="text"
                                value={marca}
                                placeholder="Marca"
                                onChange={(event) => setMarca(event.target.value)}
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <input
                                className={styles.input}
                                type="text"
                                value={modelo}
                                placeholder="Modelo"
                                onChange={(event) => setModelo(event.target.value)}
                            />
                        </div>

                        <div className={styles.inputWrapper}>
                            <input
                                className={styles.input}
                                type="text"
                                value={numero_de_patrimonio}
                                placeholder="Número do Patrimônio"
                                onChange={(event) => setNumero_de_patrimonio(event.target.value)}
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <input
                                className={styles.input}
                                type="text"
                                value={numero_de_serie}
                                placeholder="Número de Série"
                                onChange={(event) => setNumero_de_serie(event.target.value)}
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <input
                                className={styles.input}
                                type="text"
                                value={numero_do_torno}
                                placeholder="Número da Máquina"
                                onChange={(event) => setNumero_do_torno(event.target.value)}
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <h1 className={styles.title}>Data de Aquisição</h1>
                            <input
                                className={styles.input}
                                type="date"
                                value={data_de_aquisicao}
                                placeholder="Data de Aquisição"
                                onChange={(event) => setData_de_aquisicao(event.target.value)}
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <h1 className={styles.title}>Data da Última Troca de Óleo/lubrificação</h1>
                            <input
                                className={styles.input}
                                type="date"
                                value={data_da_ultima_troca_de_oleo}
                                placeholder="Data da Última Troca de Óleo/lubrificação"
                                onChange={(event) => setData_da_ultima_troca_de_oleo(event.target.value)}
                            />
                        </div>
                        <div className={styles.buttonContainer}>
                            <button className={styles.buttonText}>Cadrastrada</button>
                            {popup.visible && <PopupMessage message={popup.message} type={popup.type} />}
                        </div>

                    </div>

                </div>
            </form>
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>

    )

}
export default CadastroMaquinas;