'use client';
import styles from "./page.module.css";
import Header from "./components/header/page.jsx";
import Footer from "./components/footer/page.jsx";
  
const Home = () => {

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

export default Home;