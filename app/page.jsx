'use client';

import SideBar from "./components/SideBar/page";
import styles from "./page.module.css";
import Footer from "./components/footer/page";

const Home = () => {
  return (
    <div className={styles.main}>
      <SideBar />

      <div className={styles.content}>
        <div className={styles.header}>
          <h1>Histórico de Manutenção de Máquinas</h1>
        </div>

        <div className={styles.section}>
          <h2>Bem-vindo ao Sistema de Manutenção</h2>
          <p>Aqui você pode visualizar o histórico de manutenção das máquinas, consultar dados e muito mais.</p>
          <button className={styles.button}>Consultar Documentação</button>
        </div>

        <div className={styles.section}>
          <h2>Últimas Atualizações</h2>
          <p>Fique por dentro das últimas manutenções realizadas e novas máquinas cadastradas no sistema.</p>
          <button className={styles.button}>Ver Atualizações</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;