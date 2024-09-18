import styles from "./page.module.css"

function DocGeral() {
    return (
        <div className={styles.container}>
            <div className={styles.Cards}>
                <a href='./ManualMecanico'> 
                <div className={styles.manualM}>
                    <img className={styles.engrenagens} src="/engrenagens.png" />
                    <h1 className={styles.titulo}>Manual Mecânico</h1>
                </div>
                </a>
                <a href='./ManualEletrico'>
                <div className={styles.manualE}>
                    <img className={styles.eletrica} src="/eletrico.png" />
                    <h1 className={styles.titulo}>Manual Elétrico</h1>
                </div>
                </a>
                <a href='./FDS'>
                <div className={styles.Fds}>
                    <img className={styles.fds} src="/fds.png" />
                    <h1 className={styles.titulo}>FDS</h1>
                </div>
                </a>
                <a href='./ProtocoloSeguranca'>
                <div className={styles.Pls}>
                    <img className={styles.pls} src="/seguranca.png" />
                    <h1 className={styles.titulo2}>Protocolo de Segurança</h1>
                </div>
                </a>
            </div>
        </div>
    )
}

export default DocGeral;