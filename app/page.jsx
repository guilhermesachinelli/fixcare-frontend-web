'use client';

import SideBar from "./components/SideBar/page";
import styles from "./page.module.css";
import Footer from "./components/footer/page";

const Home = () => {

  return (
    <div className={styles.main}>
     {/* <SideBar /> */}
      <Footer />
    </div>
  );
}


export default Home; 