import styles from "./page.module.css"
import Footer from "../components/footer/page.jsx"
import Header from "../components/header/page.jsx"
import HeaderIB from "../components/HeaderIB/page";

function ManualEletrico() {
    return (
        <div className={styles.container}>
            
            <HeaderIB />            
            <div className={styles.Cards}>
                <a href="./EletricoNardini">
                <div className={styles.Nardini}>
                    <img className={styles.nardini} src="/Nardini.png" />
                </div>
                </a>

                <a href="./Romi">
                <div className={styles.Romi}>
                    <img className={styles.romi} src="/Romi.png" />
                </div>
                </a>
            </div>
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    )
}

export default ManualEletrico;