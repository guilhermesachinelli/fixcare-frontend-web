'use client';
import styles from "./page.module.css"
import Footer from "../components/footer/page.jsx"
import Header from "../components/header/page.jsx"
import PopupMessage from '../components/PopUp/PopUp';
import { useState } from "react"

function Manutencao() {
    const [selectAll, setSelectAll] = useState(false);
    const [popup, setPopup] = useState({ visible: false, message: '', type: '' });
    const [maquina, setMaquina] = useState({
        numero_de_patrimonioID: '',
        nome_do_responsavel: '',
        tipo_de_manutencao: '',
        descricao: '',
        data_da_manutencao: '',
    });
    const [check, setCheck] = useState({
        check1: false,
        check2: false,
        check3: false,
        check4: false,
        check5: false,
        check6: false,
        check7: false,
        check8: false,
        check9: false,
        check10: false,
    });

    const handleSelectAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);
        setCheck({
            check1: newSelectAll,
            check2: newSelectAll,
            check3: newSelectAll,
            check4: newSelectAll,
            check5: newSelectAll,
            check6: newSelectAll,
            check7: newSelectAll,
            check8: newSelectAll,
            check9: newSelectAll,
            check10: newSelectAll,
        });
    };

    const handleCheck = (e) => {
        const { name, checked } = e.target;
        setMaquina(prevState => ({
            ...prevState,
            [name]: checked
        }));
    };

    const handlePost = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://10.88.199.223:4000/manutencao', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(maquina),
            });

            if (response.ok) {
                setPopup({ visible: true, message: 'Manutenção cadastrada com sucesso', type: 'success' });
                setTimeout(() => {
                    setPopup({ visible: false, message: '', type: '' });
                }, 2000);
            } else {
                throw new Error('Erro ao cadastrar manutenção');
            }
        } catch (error) {
            setPopup({ visible: true, message: 'Erro ao cadastrar uma manutenção', type: 'error' });
            setTimeout(() => {
                setPopup({ visible: false, message: '', type: '' });
            }, 2000);
        }
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Header />
            </header>

            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Manutenção</h1>
            </div>
            <form className={styles.card}>
            <div className={styles.inputsContainer}>
                    
                    <input 
                    type="text"
                    name="numero_de_patrimonioID"
                    value={maquina.numero_de_patrimonioID}
                    onChange={handleCheck}
                    placeholder="Número de Patrimônio"
                    className={styles.input}
                    />
                    <input 
                    type="text"
                    name="nome_do_responsavel"
                    value={maquina.nome_do_responsavel}
                    onChange={handleCheck}
                    placeholder="Nome do Responsável"
                    className={styles.input} 
                    />
                    <input 
                    type="text"
                    name="tipo_de_manutencao"
                    value={maquina.tipo_de_manutencao}
                    onChange={handleCheck}
                    placeholder="Tipo de Manutenção" 
                    className={styles.input} 
                    />
                    <input 
                    type="text"
                    name="descricao"
                    value={maquina.descricao}
                    onChange={handleCheck}
                    placeholder="Descrição"
                    className={styles.input} 
                    />
                    <input 
                    type="date"
                    name="data_da_manutencao"
                    value={maquina.data_da_manutencao}
                    onChange={handleCheck}
                    placeholder="Data da Manutenção"
                    className={styles.input} 
                    />   
                    {popup.visible && <PopupMessage message={popup.message} type={popup.type} />}
                    <button className={styles.button} onClick={handlePost}>Registrar Manutenção</button>             
            </div>
            </form>
            <div className={styles.Card}>
                <div className={styles.checklist}>

                    <label className={styles.checkbox}>
                        <input
                            type="checkbox"
                            className={styles.check}
                            name="check1"
                            checked={check.check1}
                            onChange={handleCheck}
                        />
                        Cabeçote Móvel  - (Manual - Óleo)
                    </label>

                    <label className={styles.checkbox}>
                        <input
                            type="checkbox"
                            className={styles.check}
                            name="check2"
                            checked={check.check2}
                            onChange={handleCheck}
                        />
                        Mesa  - (Manual - Óleo)
                    </label>

                    <label className={styles.checkbox}>
                        <input
                            type="checkbox"
                            className={styles.check}
                            name="check3"
                            checked={check.check3}
                            onChange={handleCheck}
                        />
                        Placa  - (Manual - Graxa)
                    </label>

                    <label className={styles.checkbox}>
                        <input
                            type="checkbox"
                            className={styles.check}
                            name="check4"
                            checked={check.check4}
                            onChange={handleCheck}
                        />
                        Recâmbio  - (Manual - Óleo)
                    </label>

                    <label className={styles.checkbox}>
                        <input
                            type="checkbox"
                            className={styles.check}
                            name="check5"
                            checked={check.check5}
                            onChange={handleCheck}
                        />
                        Cabeçote Fixo  - (Verificar nível)
                    </label>

                    <label className={styles.checkbox}>
                        <input
                            type="checkbox"
                            className={styles.check}
                            name="check6"
                            checked={check.check6}
                            onChange={handleCheck}
                        />
                        Caixa de roscas e avanços  - (Verificar nível)
                    </label>

                    <label className={styles.checkbox}>
                        <input
                            type="checkbox"
                            className={styles.check}
                            name="check7"
                            checked={check.check7}
                            onChange={handleCheck}
                        />
                        Avental  - (Verificar nível)
                    </label>

                    <label className={styles.checkbox}>
                        <input
                            type="checkbox"
                            className={styles.check}
                            checked={selectAll}
                            onChange={handleSelectAll}
                        />
                        Selecionar Tudo
                    </label>
                    <h4 classname={styles.info}> (1)- Lubrificar manualmente pontos que não estiverem ligados á central de lubrificação.</h4>
                    <h4 classname={styles.info}> (2)- Não misturar marcas. Caso seja necessário substituir o óleo lubrificante e drenar completamente o óleo usado antes de colocar o novo.</h4>
                </div>
            </div>

            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    )
}

export default Manutencao;