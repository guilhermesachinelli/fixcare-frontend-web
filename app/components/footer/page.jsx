import React from 'react';
import styles from './page.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.sbFooterSectionPadding}>
      <hr className={styles.hr}></hr>

      <div className={styles.sbFooterBelow}>
        <div className={styles.sbFooterCopyright}>
          <p>
          ©{new Date().getFullYear()} AllCode - Todos os direitos reservados.
          </p>
        </div>
      </div>

      </div>
    </div>
  );
}

export default Footer;