import Footer from "../components/footer/page";
import Header from "../components/header/page";
import styles from "./page.module.css"

function page() {
    return (
        <div className={styles.container}>
                                    
            <header className={styles.header}>
                <Header />
            </header>
            <h1 className={styles.titulo}>1° Geração</h1>
            <div className={styles.Cards}>
                <a href='https://github.com/GuiHJLima'>
                    <div className={styles.manualM}>
                        <img className={styles.engrenagens} src="/lima.jpeg" />
                        <h1 className={styles.titulo}>Guilherme Lima</h1>
                    </div>
                </a>
                <a href='https://github.com/richardmsiqueira'>
                    <div className={styles.manualE}>
                        <img className={styles.eletrica} src="/richard.jpeg" />
                        <h1 className={styles.titulo}>Richard Macedo</h1>
                    </div>
                </a>
                <a href='https://github.com/guilhermesachinelli'>
                    <div className={styles.Fds}>
                        <img className={styles.fds} src="/isa.jpeg" />
                        <h1 className={styles.titulo}>Guilherme Godoy</h1>
                    </div>
                </a>
            </div>
            <div className={styles.Cards}>
                <a href='./ManualMecanico'>
                    <div className={styles.manualM}>
                        <img className={styles.engrenagens} src="/isa.jpeg" />
                        <h1 className={styles.titulo}>Luana Fascini</h1>
                    </div>
                </a>
                <a href='https://github.com/IsaBarquilia'>
                    <div className={styles.manualE}>
                        <img className={styles.eletrica} src="/isa.jpeg" />
                        <h1 className={styles.titulo}>Isabele Barquilia</h1>
                    </div>
                </a>
            </div>
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    )
}

export default page;