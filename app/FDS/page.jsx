import styles from "./page.module.css"
import Footer from "../components/footer/page.jsx"
import Header from "../components/header/page.jsx"

function Fds() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Header />
            </header>

            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Ficha de Dados de Segurança</h1>
            </div>

            <div className={styles.Card}>
                <div className={styles.text1}>
                    <h1 className={styles.titulos}>
                        O que é a FDS?
                    </h1>
                    <p className={styles.textos}>
                        É um documento que contém informações detalhadas sobre um produto químico, como seus ingredientes, riscos à saúde e ao meio ambiente, instruções de uso seguro e procedimentos em caso de emergência.
                    </p>
                </div>

                <div className={styles.text2}>
                    <h1 className={styles.titulos}>
                        Por que a FDS é importante?
                    </h1>
                    <p className={styles.textos}>
                        Ela é como um "manual de instruções" do produto, garantindo que o usuário saiba como manuseá-lo de forma segura e evitar acidentes.
                    </p>
                </div>

                <div className={styles.text3}>
                    <p className={styles.textos}>
                        FDS é um documento essencial para quem trabalha ou utiliza produtos químicos, pois fornece todas as informações necessárias para garantir a segurança e o bom uso desses produtos.
                    </p>
                </div>

            </div>

            <div className={styles.informacao}>
                <img src="/maisInformacao.png" alt="FDS" className={styles.imagem} />
                <p className={styles.informacao}>Mais Informações</p>
            </div>

            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    )
}

export default Fds;