import React from 'react';
import styles from './page.module.css';
import { FaInstagram, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <div className={styles.footerContent}>

      <div className={styles.footerLogo}>
        <img src="/fixcare.png" alt="Logo da fixcare" width={80} height={80}/>
        </div>

      <div className={styles.footerText}>
        <p>© 2024 - Todos os direitos reservados AllCode.</p>
      </div>
    </div>
  );
}

export default Footer;