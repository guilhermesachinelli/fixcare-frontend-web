import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.Imgs}>
      <img className={styles.logoSenai} src="/senaiLogo.png" alt="Banner" />
      <img className={styles.tornoImg} src="/tornoHome.png" alt="Banner" />
      </div>
    </div>
  );
}
