import styles from "./page.module.css"
import Footer from "../components/footer/page.jsx"
import SideBar from "../components/SideBar/page";
import HeaderIB from "../components/HeaderIB/page";

function Servico() {
    return (
        <div className={styles.container}>
            
            <HeaderIB />
            <div className={styles.Cards}>
                <a href='./SolicitacaoManutencao'>
                    <div className={styles.manutencao}>
                        <img className={styles.ferramentas} src="/ferramentas.png" />
                        <h1 className={styles.titulo1}>Solicitações de Manutenção</h1>
                    </div>
                </a>

                <a href='./Manutencao'>
                    <div className={styles.lubrificacao}>
                        <img className={styles.oleo} src="/lubrificacao.png" />
                        <h1 className={styles.titulo2}>Manutenção</h1>
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