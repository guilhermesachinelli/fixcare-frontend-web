import styles from "./page.module.css"
import Footer from "../components/footer/page.jsx"
import Header from "../components/header/page.jsx"

function DocGeral() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Header />
            </header>
            <div className={styles.Cards}>
                <a href='./FDS'>
                <div className={styles.Fds}>
                    <img className={styles.fds} src="/fds.png" />
                    <h1 className={styles.titulo}>FDS</h1>
                </div>
                </a>
                <a href='./ProtocoloSeguranca'>
                <div className={styles.Pls}>
                    <img className={styles.pls} src="/seguranca.png" />
                    <h1 className={styles.titulo2}>Protocolo de Segurança</h1>
                </div>
                </a>
            </div>
            <footer className={styles.footer}>
            <Footer />
            </footer>
        </div>
        
    )
}

export default DocGeral;