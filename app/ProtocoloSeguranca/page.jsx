'use client';
import styles from "./page.module.css"
import Footer from "../components/footer/page.jsx"
import Header from "../components/header/page.jsx"
import { useState } from "react"

function ProtocoloSeguranca() {
    const [selectAll, setSelectAll] = useState(false);
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
        setCheck(prevState => ({
            ...prevState,
            [name]: checked,
        }));
    };

    return (
        <div className={styles.container}>
            
                <Header />
           

            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Protocolo de Segurança</h1>
            </div>

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
                        Desligue a chave geral do torno.
                    </label>

                    <label className={styles.checkbox}>
                        <input
                        type="checkbox" 
                        className={styles.check} 
                        name="check2"
                        checked={check.check2}
                        onChange={handleCheck}
                        />
                        Retire as ferramentas e suporte.
                    </label>

                    <label className={styles.checkbox}> 
                        <input
                        type="checkbox" 
                        className={styles.check} 
                        name="check3"
                        checked={check.check3}
                        onChange={handleCheck}
                        />
                        Retire a peça da placa e guarde-a.
                    </label>

                    <label className={styles.checkbox}>
                        <input 
                        type="checkbox" 
                        className={styles.check}
                        name="check4"
                        checked={check.check4}
                        onChange={handleCheck} 
                        />
                        Limpe e guarde ferramentas e instrumentos da no suporte e armário.
                    </label>

                    <label className={styles.checkbox}> 
                        <input 
                        type="checkbox" 
                        className={styles.check} 
                        name="check5"
                        checked={check.check5}
                        onChange={handleCheck}
                        />
                        Retire os cavacos do torno com o pincel jogando na bandeja.
                    </label>

                    <label className={styles.checkbox}>
                        <input 
                        type="checkbox" 
                        className={styles.check}
                        name="check6"
                        checked={check.check6}
                        onChange={handleCheck}
                        />
                        Retire a bandeja inferior e jogue o cavaco no coletor de cavacos.
                    </label>

                    <label className={styles.checkbox}>
                        <input 
                        type="checkbox" 
                        className={styles.check} 
                        name="check7"
                        checked={check.check7}
                        onChange={handleCheck}
                        />
                        Limpe o acrílico com pano limpo e seco.
                    </label>

                    <label className={styles.checkbox}>
                        <input 
                        type="checkbox" 
                        className={styles.check} 
                        name="check8"
                        checked={check.check8}
                        onChange={handleCheck}
                        />
                        Limpe o torno com pano e desengraxante nas partes pintadas.
                    </label>

                    <label className={styles.checkbox}>
                        <input 
                        type="checkbox" 
                        className={styles.check} 
                        name="check9"
                        checked={check.check9}
                        onChange={handleCheck}
                        />
                        Lubrifique as partes não pintadas com fina camada de óleo.
                    </label>

                    <label className={styles.checkbox}>
                        <input 
                        type="checkbox" 
                        className={styles.check} 
                        name="check10"
                        checked={check.check10}
                        onChange={handleCheck}
                        />
                        Varra as proximidades do seu local de trabalho.
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


                </div>
            </div>


            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    )
}

export default ProtocoloSeguranca;