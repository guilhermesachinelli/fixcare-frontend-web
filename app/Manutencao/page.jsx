import styles from "./page.module.css"
import Footer from "../components/footer/page.jsx"
import Header from "../components/header/page.jsx"

function Manutencao() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Header />
            </header>
            <div className={styles.Cards}>
                <a href='./ManutencaoCorretiva'>
                <div className={styles.Corretiva}>
                    <img className={styles.corretiva} src="/corretiva.png" />
                    <h1 className={styles.titulo}>Manutenção Corretiva</h1>
                </div>
                </a>
                <a href='./ManutencaoPreventiva'>
                <div className={styles.Preventiva}>
                    <img className={styles.preventiva} src="/preventiva.png" />
                    <h1 className={styles.titulo2}>Manutenção Preventiva</h1>
                </div>
                </a>
            </div>
            <footer className={styles.footer}>
            <Footer />
            </footer>
        </div>
        
    )
}

export default Manutencao;