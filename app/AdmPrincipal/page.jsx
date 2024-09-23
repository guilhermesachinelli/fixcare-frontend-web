import styles from "./page.module.css"
import Footer from "../components/footer/page.jsx"
import Header from "../components/header/page.jsx"

function AdmPrincipal() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Header />
            </header>
            <div className={styles.Cards}>
                <a href="./Nardini">
                <div className={styles.Nardini}>
                    <img className={styles.nardini} src="/ferramenta1.png" />
                    <h1 className={styles.titulo}>Manutenções</h1>
                </div>
                </a>

                <a href="./Romi">
                <div className={styles.Romi}>
                    <img className={styles.romi} src="/cadastroM.png" />
                    <h1 className={styles.titulo}>Cadastro de Máquinas</h1>
                </div>
                </a>
            </div>
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    )
}

export default AdmPrincipal;