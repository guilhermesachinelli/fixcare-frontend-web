import styles from "./page.module.css"
import Footer from "../components/footer/page.jsx"
import Header from "../components/header/page.jsx"
import Link from "next/link";

function NardiniMecanico() {
    return (
        <div className={styles.container}>
            
                <Header />
            

            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Manual Mecânico: Torno Nardini.</h1>
            </div>

            <div className={styles.Card}>
                <div className={styles.text1}>
                    <h1 className={styles.titulos}>
                        O que é um manual mecânico?
                    </h1>
                    <p className={styles.textos}>
                        Um manual mecânico é um documento que orienta sobre a operação, manutenção e reparo de máquinas e equipamentos. Ele fornece instruções detalhadas, procedimentos de segurança e diagnósticos de problemas, ajudando a garantir o funcionamento eficiente e seguro das máquinas, além de prolongar sua vida útil. Frequentemente, inclui diagramas e ilustrações para facilitar a compreensão.
                    </p>
                </div>

                <div className={styles.text2}>
                    <h1 className={styles.titulos}>
                        Por que um manual mecânico é importante?
                    </h1>
                    <p className={styles.textos}>
                        Um manual mecânico é importante porque orienta sobre a operação segura e eficaz de máquinas, prevenindo acidentes e falhas. Ele ajuda a reduzir o tempo de inatividade e os custos com reparos, além de capacitar os usuários, promovendo um ambiente de trabalho mais seguro e produtivo.
                    </p>
                </div>

                <div className={styles.text3}>
                    <Link href='https://docs.google.com/document/d/1IzMQfQRoDLj79QP6K82AQww9sO4b47-2ZczWxcRXXDk/edit?usp=sharing'>
                        <p className={styles.textos}>
                            Clique aqui para acessar o manual mecânico do torno Nardini
                        </p>
                    </Link>
                </div>
            </div>


            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    )
}

export default NardiniMecanico;