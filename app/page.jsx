'use client';
import styles from "./page.module.css";
import Footer from "./components/footer/page";
import HeaderIB from "./components/HeaderIB/page"

const Home = () => {
  return (

    <div className={styles.container}>

      <HeaderIB />

      <div className={styles.Imgs}>

        <img className={styles.logoSenai} src="/senaibluelogos.png" alt="Banner" />

        <img className={styles.tornoImg} src="/tornoHome.png" alt="Banner" />
      </div>

      <footer className={styles.footer}>

        <Footer />
      </footer>
    </div>
  );
}

export default Home; 