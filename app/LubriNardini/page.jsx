import styles from "./page.module.css"
import Footer from "../components/footer/page.jsx"
import Header from "../components/header/page.jsx"

function LubriNardini() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Header />
            </header>
               <h1 className={styles.Titulo}>Lubrificação Nardini</h1>
            <div className={styles.Subtitulo}>
                <h3>Diário</h3>
                </div>
            <div className={styles.nardini}>
 
            </div>
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    )
}

export default LubriNardini;
