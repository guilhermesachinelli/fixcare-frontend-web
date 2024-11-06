'use client';

import styles from "./page.module.css";
import Header from "./components/header/page.jsx";
import Footer from "./components/footer/page.jsx";
import Body from "./components/Body/page";

const Home = () => {
  return (
    <div className={styles.container}>

      
        <Header />
      <Body />
        <Footer />
      
    </div>
  );
}


export default Home; 