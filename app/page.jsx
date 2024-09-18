import styles from "./page.module.css";
import Header from "./components/header/page.jsx";
import Footer from "./components/footer/page.jsx";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Header />
      </header>
      <div className={styles.Imgs}>
        <img className={styles.logoSenai} src="/senaiLogo.png" alt="Banner" />
        <img className={styles.tornoImg} src="/tornoHome.png" alt="Banner" />
      </div>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
