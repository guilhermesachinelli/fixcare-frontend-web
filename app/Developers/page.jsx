import Footer from "../components/footer/page";
import HeaderIB from "../components/HeaderIB/page";
import SideBar from "../components/sidebar/page"; // Corrigido para "sidebar"

import styles from "./page.module.css";

function Page() { // Corrigido para "Page" com letra maiúscula
    return (
        <div className={styles.container}>
            <HeaderIB />           
  <div className={styles.allcards}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.titulo1}>Desenvolvedores</h1>
                </div>
                <div className={styles.Cards1}>
                    <a href='https://github.com/GuiHJLima'>
                        <div className={styles.individual}>
                            <img className={styles.foto} src="/lima.jpeg" alt="Guilherme Lima" />
                            <h1 className={styles.nomes}>Guilherme Lima</h1>
                        </div>
                    </a>
                    <a href='https://github.com/richardmsiqueira'>
                        <div className={styles.individual}>
                            <img className={styles.foto} src="/richard.jpeg" alt="Richard Macedo" />
                            <h1 className={styles.nomes}>Richard Macedo</h1>
                        </div>
                    </a>
                    <a href='https://github.com/IsaBarquilia'>
                        <div className={styles.individual}>
                            <img className={styles.foto} src="/isa.jpeg" alt="Isabelle Barquilia" />
                            <h1 className={styles.nomes}>Isabelle Barquilia</h1>
                        </div>
                    </a>
                </div>
                <div className={styles.Cards2}>
                    <a href='https://github.com/LuFassini'>
                        <div className={styles.individual}>
                            <img className={styles.foto} src="/luana.jpeg" alt="Luana Fassini" />
                            <h1 className={styles.nomes}>Luana Fassini</h1>
                        </div>
                    </a>
                    <a href='https://github.com/guilhermesachinelli'>
                        <div className={styles.individual}>
                            <img className={styles.foto} src="/godoy.jpg" alt="Guilherme Godoy" />
                            <h1 className={styles.nomes}>Guilherme Godoy</h1>
                        </div>
                    </a>
                </div>
            </div>
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    );
}

export default Page;