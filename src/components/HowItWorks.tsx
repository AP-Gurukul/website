import React from 'react';
import styles from './HowItWorks.module.css';
import { ArrowRight } from 'lucide-react';
import { BOT_HANDLE } from '../config';

const HowItWorks: React.FC = () => {
  return (
    <section className={`section-pad ${styles.howItWorks}`} id="how-it-works">
      
      <div className={styles.head}>
        <div className="section-label">How it works</div>
        <h2>Simple by design.</h2>
        <p className="section-sub">
          Four steps between you and the group. No app to install, nothing to set up.
        </p>
      </div>

      <div className={styles.grid}>
        
        <div className={styles.card}>
          <div className={styles.num}>01</div>
          <h3>Message the bot</h3>
          <p>Send /start to {BOT_HANDLE} on Telegram and pick the pass that suits you.</p>
          <div className={styles.arrow}><ArrowRight size={14} /></div>
        </div>

        <div className={styles.card}>
          <div className={styles.num}>02</div>
          <h3>Pay securely</h3>
          <p>The bot opens a Razorpay checkout. Pay by UPI, card or net banking.</p>
          <div className={styles.arrow}><ArrowRight size={14} /></div>
        </div>

        <div className={styles.card}>
          <div className={styles.num}>03</div>
          <h3>Get your invite</h3>
          <p>A single-use invite link to the private group reaches you on Telegram straight away.</p>
          <div className={styles.arrow}><ArrowRight size={14} /></div>
        </div>

        <div className={styles.card}>
          <div className={styles.num}>04</div>
          <h3>Practise daily</h3>
          <p>Questions are posted every day. Check your remaining days any time with /status.</p>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
