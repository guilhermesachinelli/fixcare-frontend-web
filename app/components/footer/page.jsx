import React from 'react';
import styles from './page.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.sbFooterSectionPadding}>
        <div className={styles.sbFooterLinks}>
          <div className={styles.sbFooterLinksDiv}>
            <h4>Páginas</h4>
            <a href="/">
              <p>Home</p>
            </a>
            <a href="./DocGeral">
              <p>Documentação</p>
            </a>
            <a href="./LoginServicos">
              <p>Login</p>
            </a>
            <a href="./Adm">
              <p>Adiministração</p>
            </a>
          </div>
          <div className={styles.sbFooterLinksDiv}>
            <h4>Documentos</h4>
            <a href="./FDS">
              <p>FDS</p>
            </a>
            <a href="./ProtocoloSeguranca">
              <p>Protocolo de Segurança</p>
            </a>
          </div>
          <div className={styles.sbFooterLinksDiv}>
            <h4>Desenvolvedores</h4>
            <a href="./Developers">
              <p>Nossa Equipe</p>
            </a>
          </div>
          <div className={styles.sbFooterLinksDiv}>
            <h4>Em Breve...</h4>
            <div className={styles.socialMidia}>
              
            </div>
          </div>
        </div>

      <hr className={styles.hr}></hr>

      <div className={styles.sbFooterBelow}>
        <div className={styles.sbFooterCopyright}>
          <p>
          ©{new Date().getFullYear()} AllCode - Todos os direitos reservados.
          </p>
        </div>
        <div className={styles.sbFooterBelowLinks}>
          <div><p>Termos & Condições</p></div>
          <div><p>Privacidade</p></div>
          <div><p>Segurança</p></div>
        </div>
      </div>

      </div>
    </div>
  );
}

export default Footer;