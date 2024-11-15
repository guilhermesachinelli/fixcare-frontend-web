import Footer from "../components/footer/page";
import SideBar from "../components/SideBar/page";

import styles from "./page.module.css"

function page() {
    return (
        <div className={styles.container}>

            <SideBar />

            <div className={styles.titleContainer}>
                <h1 className={styles.titulo}>Desenvolvedores</h1>
            </div>
            <div className={styles.Cards1}>
                <a href='https://github.com/GuiHJLima'>
                    <div className={styles.cardpessoas}>
                        <img className={styles.imagens} src="/lima.jpeg" />
                        <h1 className={styles.nome}>Guilherme Lima</h1>
                    </div>
                </a>
                <a href='https://github.com/richardmsiqueira'>
                    <div className={styles.cardpessoas}>
                        <img className={styles.imagens} src="/richard.jpeg" />
                        <h1 className={styles.nome}>Richard Macedo</h1>
                    </div>
                </a>
                <a href='https://github.com/IsaBarquilia'>
                    <div className={styles.cardpessoas}>
                        <img className={styles.imagens} src="/isa.jpeg" />
                        <h1 className={styles.nome}>Isabelle Barquilia</h1>
                    </div>
                </a>
            </div>
            <div className={styles.Cards2}>
                <a href='https://github.com/LuFassini'>
                    <div className={styles.cardpessoas}>
                        <img className={styles.imagens} src="/luana.jpeg" />
                        <h1 className={styles.nome}>Luana Fassini</h1>
                    </div>
                </a>
                <a href='https://github.com/guilhermesachinelli'>
                    <div className={styles.cardpessoas}>
                        <img className={styles.imagens} src="/godoy.jpg" />
                        <h1 className={styles.nome}>Guilherme Godoy</h1>
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