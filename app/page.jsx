// Indica que este componente deve ser renderizado no lado do cliente.
'use client';


// Importa o componente Footer.
import Footer from "./components/footer/page.jsx";
import HeaderIB from "./components/HeaderIB/page";

// Importa os estilos definidos no arquivo CSS.
import styles from "./page.module.css";

// Define o componente funcional Home.
const Home = () => {
  return (
    // Aplica a classe CSS 'container' ao div principal.
    <div className={styles.container}>

      {/* Define o cabeçalho da página e aplica a classe CSS 'header'.*/}
        {/*Renderiza o componente Header.*/}
        <HeaderIB />
      {/* Define uma div para conter as imagens e aplica a classe CSS 'Imgs'.*/}
      <div className={styles.Imgs}>
        {/* Renderiza a imagem do logo do Senai e aplica a classe CSS 'logoSenai'.*/}
        <img className={styles.logoSenai} src="/senaibluelogos.png" alt="Banner" />
        {/* Renderiza a imagem do torno e aplica a classe CSS 'tornoImg'.*/}
        <img className={styles.tornoImg} src="/tornoHome.png" alt="Banner" />
      </div>
      {/* Define o rodapé da página e aplica a classe CSS 'footer'.*/}
      <footer className={styles.footer}>
        {/*Renderiza o componente Footer.*/}
        <Footer />
      </footer>
    </div>
  );
}

export default Home; 