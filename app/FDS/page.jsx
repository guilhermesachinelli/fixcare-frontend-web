import styles from "./page.module.css"
import Footer from "../components/footer/page.jsx"
import Link from "next/link";
import SideBar from "../components/SideBar/page.jsx";

function Fds() {
    return (
        <div className={styles.container}>

            <SideBar />

            <div className={styles.Card}>

                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>Ficha de Dados de Segurança</h1>
                </div>

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
                    <p className={styles.textos1}>
                        FDS é um documento essencial para quem trabalha ou utiliza produtos químicos, pois fornece todas as informações necessárias para garantir a segurança e o bom uso desses produtos.
                    </p>
                    <Link href='https://www.quimicabrasileira.com.br/fispqs/'>
                        <div className={styles.informacao}>
                            <img src="/maisInformacao.png" alt="FDS" className={styles.imagem} />
                            <p className={styles.informacaoText}>Mais Informações</p>
                        </div>
                    </Link>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Fds;