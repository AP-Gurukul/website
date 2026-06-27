import React from 'react';
import styles from './HowItWorks.module.css';
import { ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className={`section-pad ${styles.howItWorks}`} id="how-it-works">
      
      <div className={styles.head}>
        <div className="section-label">How it works</div>
        <h2>Simple by design.</h2>
        <p className="section-sub">
          Four steps between you and your score improvement. No complex setup required.
        </p>
      </div>

      <div className={styles.grid}>
        
        <div className={styles.card}>
          <div className={styles.num}>01</div>
          <h3>Pick your exam</h3>
          <p>Select APPSC Group 1 or Group 2. The entire syllabus maps automatically.</p>
          <div className={styles.arrow}><ArrowRight size={14} /></div>
        </div>

        <div className={styles.card}>
          <div className={styles.num}>02</div>
          <h3>Practice by topic</h3>
          <p>Go deep into any chapter. Untimed mode first to build confidence, then timed.</p>
          <div className={styles.arrow}><ArrowRight size={14} /></div>
        </div>

        <div className={styles.card}>
          <div className={styles.num}>03</div>
          <h3>Take mock tests</h3>
          <p>Full-length mocks with actual exam conditions: question count, time limits, negative marking.</p>
          <div className={styles.arrow}><ArrowRight size={14} /></div>
        </div>

        <div className={styles.card}>
          <div className={styles.num}>04</div>
          <h3>Review & improve</h3>
          <p>Weak areas auto-flagged after each test. Revisit until accuracy hits 90%+.</p>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
