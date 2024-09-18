import styles from "./page.module.css"

function page() {
    return (
        <div className={styles.container}>
            <div className={styles.Cards}>
                <a href='./ManualMecanico'> 
                <div className={styles.manualM}>
                    <img className={styles.engrenagens} src="/engrenagens.png" />
                    <h1 className={styles.titulo}>Guilherme Lima</h1>
                </div>
                </a>
                <a href='./ManualEletrico'>
                <div className={styles.manualE}>
                    <img className={styles.eletrica} src="/eletrico.png" />
                    <h1 className={styles.titulo}>Richard Macedo</h1>
                </div>
                </a>
                <a href='./FDS'>
                <div className={styles.Fds}>
                    <img className={styles.fds} src="/fds.png" />
                    <h1 className={styles.titulo}>Guilherme Godoy</h1>
                </div>
                </a>
            </div>
            <div className={styles.Cards}>
                <a href='./ManualMecanico'> 
                <div className={styles.manualM}>
                    <img className={styles.engrenagens} src="/engrenagens.png" />
                    <h1 className={styles.titulo}>Luana Fascini</h1>
                </div>
                </a>
                <a href='./ManualEletrico'>
                <div className={styles.manualE}>
                    <img className={styles.eletrica} src="/eletrico.png" />
                    <h1 className={styles.titulo}>Isabele Barquilia</h1>
                </div>
                </a>
            </div>
        </div>
    )
}

export default page;