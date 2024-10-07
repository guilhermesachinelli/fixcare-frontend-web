import styles from "./page.module.css"
import Footer from "../components/footer/page.jsx"
import Header from "../components/header/page.jsx"
import Link from "next/link";

function ProtocoloSeguranca() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Header />
            </header>

            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Protocolo de Segurança</h1>
            </div>

            <div className={styles.Card}>
                <div className={styles.checklist}>

                    <label>
                        <input type="checkbox" className={styles.check}/>
                        Desligue a chave geral do torno.
                    </label>

                    <label>
                        <input type="checkbox"className={styles.check} />
                        Retire as ferramentas e suporte.
                    </label>

                    <label>
                        <input type="checkbox" className={styles.check}/>
                        Retire a peça da placa e guarde-a.
                    </label>

                    <label>
                        <input type="checkbox" className={styles.check}/>
                        Limpe e guarde ferramentas e instrumentos da no suporte e armário.                    </label>

                    <label>
                        <input type="checkbox"className={styles.check}/>
                        Retire os cavacos do torno com o pincel jogando na bandeja.                    </label>

                    <label>
                        <input type="checkbox" className={styles.check}/>
                        Retire a bandeja inferior e jogue o cavaco no coletor de cavacos.                    </label>

                    <label>
                        <input type="checkbox" className={styles.check}/>
                        Limpe o acrílico com pano limpo e seco.                    </label>

                    <label>
                        <input type="checkbox" className={styles.check}/>
                        Limpe o torno com pano e desengraxante nas partes pintadas.                    </label>

                    <label>
                        <input type="checkbox" className={styles.check}/>
                        Lubrifique as partes não pintadas com fina camada de óleo.                    </label>

                    <label>
                        <input type="checkbox" className={styles.check}/>
                        Varra as proximidades do seu local de trabalho.                    </label>



                </div>
            </div>


            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    )
}

export default ProtocoloSeguranca;