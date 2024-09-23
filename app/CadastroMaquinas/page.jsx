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
    const [tipoOleo, setTipoOleo] = useState('');
    const [pontoLubrificacao, setPontoLubrificacao] = useState('');
    const [frequenciaLubrificacao, setFrequenciaLubrificacao] = useState('');
    const [quantidadeDeOleoLubrificacao, setQuantidadeDeOleoLubrificacao] = useState('');
    const [UltimaLubrificacao, setUltimaLubrificacao] = useState('');
    const [imagem, setImagem] = useState(null);

    const handleImageChange = (event) => {
        setImagem(URL.createObjectURL(event.target.files[0]));
      };

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
                        <input 
                        className={styles.input} 
                        type="date" 
                        value={dataAquisicao}
                        placeholder="Data de Aquisição"
                        onChange={(event) => setDataAquisicao(event.target.value)}
                        />
                    </div>
                    <div className={styles.inputWrapper}>
                        <input 
                        className={styles.input} 
                        type="text" 
                        value={tipoOleo}
                        placeholder="Tipo do Óleo para Lubrificação"
                        onChange={(event) => setTipoOleo(event.target.value)}
                        />
                    </div>
                    <div className={styles.inputWrapper}>
                        <input 
                        className={styles.input} 
                        type="text" 
                        value={pontoLubrificacao}
                        placeholder="Pontos de Lubrificação"
                        onChange={(event) => setPontoLubrificacao(event.target.value)}
                        />
                    </div>
                    <div className={styles.inputWrapper}>
                        <input 
                        className={styles.input} 
                        type="text" 
                        value={frequenciaLubrificacao}
                        placeholder="Frequência de Lubrificação"
                        onChange={(event) => setFrequenciaLubrificacao(event.target.value)}
                        />
                    </div>
                    <div className={styles.inputWrapper}>
                        <input 
                        className={styles.input} 
                        type="text" 
                        value={quantidadeDeOleoLubrificacao}
                        placeholder="Quantidade de Óleo para Lubrificação"
                        onChange={(event) => setQuantidadeDeOleoLubrificacao(event.target.value)}
                        />
                    </div>
                    <div className={styles.inputWrapper}>
                        <input 
                        className={styles.input} 
                        type="date" 
                        value={UltimaLubrificacao}
                        placeholder="Data da Última Troca de Óleo/lubrificação"
                        onChange={(event) => setUltimaLubrificacao(event.target.value)}
                        />
                    </div>
                    <div className={styles.inputWrapper}>
                        <input 
                        className={styles.input}
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        />
                    </div>
                    {imagem && (
                        <div className={styles.imagePreview}>
                            <img src={imagem} alt="Preview" />
                        </div>
                    )
                    }

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