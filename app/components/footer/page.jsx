//importe dos itens necessarios
import React from 'react';
import styles from './page.module.css';
import { FaInstagram, FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';

//definindo o componente Footer
function Footer() {
  return (
<div className={styles.footerContent}>
      <div className={styles.footerIcon}>
        <a href="https://www.instagram.com/">
      <FaInstagram />
      </a>
      <a href="https://www.github.com/">
      <FaGithub />
      </a>
</div>
    <div className={styles.footerText}>
      <p>© 2024 - Todos os direitos reservados AllCode.</p>
      </div>
      </div>
  );
}
//exportando o componente Footer
export default Footer;