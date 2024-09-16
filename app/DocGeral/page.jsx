import styles from "./page.module.css"

function page() {
    return (
        <div className={styles.page}>
            {/* Bloco das informções do manuel mecânico */}
            <main className={styles.card}>
                <h1>Manual Mecânico</h1>
            </main>
            {/* Bloco das informções do manuel elétrico */}
            <main className={styles.card}>
                <h1>Manual Elétrico</h1>
            </main>
            {/* Bloco das informções da ficha de dados de segurança */}
            <main className={styles.card}>
                <h1>Ficha de Dados de Segurança</h1>
            </main>
            {/* Bloco das informções do protocolo de segurança */}
            <main className={styles.card}>
                <h1>Protocolo de Segurança</h1>
            </main>
        </div>
        
    )
}

export default page