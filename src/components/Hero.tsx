import React from 'react';
import styles from './Hero.module.css';
import { ArrowRight } from 'lucide-react';
import { BOT_URL } from '../config';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.content}>
        
        <div className={`${styles.pill} animate-fade-in-up`} style={{ animationDelay: '0.1s' }}>
          <span className={styles.pillChip}>New</span>
          <span className={styles.pillText}>Designed for APPSC Groups 1 & 2</span>
        </div>

        <h1 className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Crack APPSC<br />
          with <span className={styles.greenText}>focused</span><br />
          practice.
        </h1>

        <p className={`${styles.sub} animate-fade-in-up`} style={{ animationDelay: '0.3s' }}>
          Curated questions with detailed explanations, posted every day to a private Telegram group built exclusively for Andhra Pradesh Group 1 &amp; 2 aspirants. Buy a pass, get added automatically.
        </p>

        <div className={`${styles.ctas} animate-fade-in-up`} style={{ animationDelay: '0.4s' }}>
          <a
            href={BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            Join on Telegram <ArrowRight size={16} />
          </a>
          <a href="#how-it-works" className={styles.btnGhost}>
            See how it works
          </a>
        </div>

        <div className={`${styles.stats} animate-fade-in-up`} style={{ animationDelay: '0.5s' }}>
          <div className={styles.stat}>
            <span className={styles.statNum}>Daily</span>
            <span className={styles.statLabel}>New questions posted</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>G1 &amp; G2</span>
            <span className={styles.statLabel}>Groups covered</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>Every Q</span>
            <span className={styles.statLabel}>With a full explanation</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>₹249</span>
            <span className={styles.statLabel}>Per month, cancel anytime</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
