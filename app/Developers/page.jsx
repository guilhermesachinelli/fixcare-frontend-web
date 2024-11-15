import Footer from "../components/footer/page";
import SideBar from "../components/SideBar/page";

import styles from "./page.module.css"

function page() {
    return (
        <div className={styles.container}>

            <SideBar />

            <div className={styles.titleContainer}>
                <h1 className={styles.titulo1}>Desenvolvedores</h1>
            </div>

            <div className={styles.Cards}>
                <a href='https://github.com/GuiHJLima'>
                    <div className={styles.manualM}>
                        <img className={styles.engrenagens} src="/lima.jpeg" />
                        <h1 className={styles.nomes}>Guilherme Lima</h1>
                    </div>
                </a>
                <a href='https://github.com/richardmsiqueira'>
                    <div className={styles.manualE}>
                        <img className={styles.engrenagens} src="/richard.jpeg" />
                        <h1 className={styles.nomes}>Richard Macedo</h1>
                    </div>
                </a>
                <a href='https://github.com/IsaBarquilia'>
                    <div className={styles.Fds}>
                        <img className={styles.engrenagens} src="/isa.jpeg" />
                        <h1 className={styles.nomes}>Isabelle Barquilia</h1>
                    </div>
                </a>
            </div>
            <div className={styles.Cards}>
                <a href='https://github.com/LuFassini'>
                    <div className={styles.manualM}>
                        <img className={styles.engrenagens} src="/luana.jpeg" />
                        <h1 className={styles.nomes}>Luana Fassini</h1>
                    </div>
                </a>
                <a href='https://github.com/guilhermesachinelli'>
                    <div className={styles.manualE}>
                        <img className={styles.engrenagens} src="/godoy.jpg" />
                        <h1 className={styles.nomes}>Guilherme Godoy</h1>
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