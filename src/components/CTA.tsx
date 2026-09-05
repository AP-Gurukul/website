import React from 'react';
import styles from './CTA.module.css';
import { Send } from 'lucide-react';
import { BOT_URL, BOT_HANDLE } from '../config';

const CTA: React.FC = () => {
  return (
    <section className={`section-pad ${styles.ctaContainer}`} id="cta">
      <div className={styles.ctaCard}>
        <div className={styles.content}>
          <h2>Start preparing<br/>the smart way.</h2>
          
          <p className={styles.sub}>
            Pick a pass in the Telegram bot, pay securely with Razorpay, and you are added to the
            private group straight away.
          </p>

          <div className={styles.btns}>
            <a
              href={BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimaryLight}
            >
              <Send size={16} /> Open {BOT_HANDLE}
            </a>
            <a href="#pricing" className={styles.btnGhostDark}>
              See the passes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
