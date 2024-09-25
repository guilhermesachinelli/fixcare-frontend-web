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
    const [numPatrimonio, setNumPatrimonio] = useState('');
    const [numSerie, setNumSerie] = useState('');
    const [numMaquina, setNumMaquina] = useState('');
    const [dataAquisicao, setDataAquisicao] = useState('');
    const [UltimaLubrificacao, setUltimaLubrificacao] = useState('');
    const [popup, setPopup] = useState({ visible: false, message: '', type: '' });
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch('http://10.88.200.139:4000/machine', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                categoria,
                marca,
                modelo,
                numPatrimonio,
                numSerie,
                numMaquina,
                dataAquisicao,
                UltimaLubrificacao,
            }),

        });
      
        const data = await response.json();
        console.log(categoria, marca, modelo, numPatrimonio, numSerie, numMaquina, dataAquisicao, UltimaLubrificacao);
        console.log(data);
        if (data.lenght === undefined) {
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
                                value={numPatrimonio}
                                placeholder="Número do Patrimônio"
                                onChange={(event) => setNumPatrimonio(event.target.value)}
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <input
                                className={styles.input}
                                type="text"
                                value={numSerie}
                                placeholder="Número de Série"
                                onChange={(event) => setNumSerie(event.target.value)}
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <input
                                className={styles.input}
                                type="text"
                                value={numMaquina}
                                placeholder="Número da Máquina"
                                onChange={(event) => setNumMaquina(event.target.value)}
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <h1 className={styles.title}>Data de Aquisição</h1>
                            <input
                                className={styles.input}
                                type="date"
                                value={dataAquisicao}
                                placeholder="Data de Aquisição"
                                onChange={(event) => setDataAquisicao(event.target.value)}
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <h1 className={styles.title}>Data da Última Troca de Óleo/lubrificação</h1>
                            <input
                                className={styles.input}
                                type="date"
                                value={UltimaLubrificacao}
                                placeholder="Data da Última Troca de Óleo/lubrificação"
                                onChange={(event) => setUltimaLubrificacao(event.target.value)}
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