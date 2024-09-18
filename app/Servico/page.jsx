import styles from "./page.module.css"
import Footer from "../components/footer/page.jsx"
import Header from "../components/header/page.jsx"

function Servico() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Header />
            </header>

            <div className={styles.Cards}>
                <a href='./Manutencao'>
                    <div className={styles.manutencao}>
                        <img className={styles.ferramentas} src="/ferramentas.png" />
                        <h1 className={styles.titulo}>Manutenção</h1>
                    </div>
                </a>
                <a href='./ManualEletrico'>
                    <div className={styles.lubrificacao}>
                        <img className={styles.oleo} src="/lubrificacao.png" />
                        <h1 className={styles.titulo}>Manual Elétrico</h1>
                    </div>
                </a>
            </div>
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    )
}

export default Servico;