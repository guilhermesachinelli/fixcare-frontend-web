import styles from "./page.module.css"
import Footer from "../components/footer/page.jsx"
import Header from "../components/header/page.jsx"
import Link from "next/link";
import HeaderIB from "../components/HeaderIB/page";

function EletricoNardini() {
    return (
        <div className={styles.container}>
            
            <HeaderIB />            

            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Manual Elétrico: Torno Nardini.</h1>
            </div>

            <div className={styles.Card}>
                <div className={styles.text1}>
                    <h1 className={styles.titulos}>
                        O que é um manual elétrico?
                    </h1>
                    <p className={styles.textos}>
                    Um manual elétrico é um documento que fornece informações sobre a instalação, operação, manutenção e segurança de dispositivos elétricos. Ele orienta técnicos e usuários com instruções detalhadas, diagramas e especificações, ajudando a garantir o uso seguro e eficiente dos equipamentos. É essencial para prevenir acidentes e danos.
                     </p>
                </div>

                <div className={styles.text2}>
                    <h1 className={styles.titulos}>
                        Por que um manual elétrico é importante?
                    </h1>
                    <p className={styles.textos}>
                    Um manual elétrico é crucial para a segurança, eficiência e conformidade no uso de equipamentos. Ele fornece instruções que reduzem riscos de acidentes, melhora a operação, ajuda na resolução de falhas e facilita o treinamento de novos usuários, garantindo um uso eficaz dos sistemas elétricos.                    </p>
                </div>

                <div className={styles.text3}>
                    <Link href='https://docs.google.com/document/d/1wxIwn7aITMOgwlofx_OSih6VeNXh8CCZUxNVHISgHr0/edit?usp=sharing'>
                        <p className={styles.textos}>
                            Clique aqui para acessar o manual elétrico do torno Nardini
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

export default EletricoNardini;