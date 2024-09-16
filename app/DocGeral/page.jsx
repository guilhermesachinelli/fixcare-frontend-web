import styles from "./page.module.css"

function page() {
    return (
        <div className={styles.page}>
            {/* Bloco das informções do manuel mecânico */}
            <main className={styles.card}>
                <img src="/engrenagem.png" className={styles.img} />
                <h1 className={styles.title}>Manual Mecânico</h1>
            </main>
            {/* Bloco das informções do manuel elétrico */}
            <main className={styles.card}>
            <img src="/eletrico.png" className={styles.img2} />
                <h1 className={styles.title}>Manual Elétrico</h1>
            </main>
            {/* Bloco das informções da ficha de dados de segurança */}
            <main className={styles.card}>
            <img src="/fds.png" className={styles.img2} />
                <h1 className={styles.title}>Ficha de Dados de Segurança</h1>
            </main>
            {/* Bloco das informções do protocolo de segurança */}
            <main className={styles.card}>
            <img src="/seguranca.png" className={styles.img3} />
                <h1 className={styles.title}>Protocolo de Segurança</h1>
            </main>
        </div>
        
    )
}

export default page