'use client';
import styles from "./page.module.css"
import Header from "../components/header/page.jsx"
import Footer from "../components/footer/page.jsx"
import { useState } from 'react';

function CadastroMaquinas() {
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [numPatrimonio, setNumPatrimonio] = useState('');
    const [numSerie, setNumSerie] = useState('');
    const [numMaquina, setNumMaquina] = useState('');
    const [dataAquisicao, setDataAquisicao] = useState('');
    const [UltimaLubrificacao, setUltimaLubrificacao] = useState('');

    return (
        <form>
        <div className={styles.container}>
            <header className={styles.header}>
                <Header />
            </header>

            <div className={styles.Card}>
                <h1 className={styles.titulo}>Cadastro de Máquinas</h1>
                <div className={styles.inputsContainer}>
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
                        value={categoria}
                        placeholder="Categoria"
                        onChange={(event) => setCategoria(event.target.value)}
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

                </div>
            </div>
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
        </form>
    )
}

export default CadastroMaquinas;