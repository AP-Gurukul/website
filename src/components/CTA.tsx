import React from 'react';
import styles from './CTA.module.css';
import { Download } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className={`section-pad ${styles.ctaContainer}`} id="cta">
      <div className={styles.ctaCard}>
        <div className={styles.content}>
          <h2>Start preparing<br/>the smart way.</h2>
          
          <p className={styles.sub}>
            Join 8,200+ APPSC Group 1 & 2 aspirants already using APPSC Sadhana to sharpen their scores every day.
          </p>

          <div className={styles.btns}>
            <a href="#" className={styles.btnPrimaryLight}>
              <Download size={16} /> Download for Android
            </a>
            <a href="#" className={styles.btnGhostDark}>
              Download for iOS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
