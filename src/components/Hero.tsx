import styles from './Hero.module.css';
import { ArrowRight } from 'lucide-react';

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
          Thousands of curated questions, detailed explanations, and smart mock tests — all in one ultra-premium, distraction-free app built exclusively for Andhra Pradesh Group 1 & 2 success.
        </p>

        <div className={`${styles.ctas} animate-fade-in-up`} style={{ animationDelay: '0.4s' }}>
          <a href="#cta" className={styles.btnPrimary}>
            Download the App <ArrowRight size={16} />
          </a>
          <a href="#how-it-works" className={styles.btnGhost}>
            See how it works
          </a>
        </div>

        <div className={`${styles.stats} animate-fade-in-up`} style={{ animationDelay: '0.5s' }}>
          <div className={styles.stat}>
            <span className={styles.statNum}>50K+</span>
            <span className={styles.statLabel}>Questions in bank</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>12</span>
            <span className={styles.statLabel}>Core Subjects</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>8,200+</span>
            <span className={styles.statLabel}>Active students</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>91%</span>
            <span className={styles.statLabel}>Accuracy improvement</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
