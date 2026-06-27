import styles from './Outcomes.module.css';

const Outcomes: React.FC = () => {
  return (
    <section className={`section-pad ${styles.outcomes}`} id="outcomes">
      
      <div className="section-label" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>Outcomes</div>
      <h2>Numbers that speak.</h2>
      <p className="section-sub" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
        Measurable results from Group 1 & 2 aspirants who committed to daily practice with APPSC Sadhana.
      </p>

      <div className={styles.grid}>
        
        <div className={styles.card}>
          <div className={styles.num}>91%</div>
          <div className={styles.label}>Score improvement after 30 days</div>
        </div>

        <div className={styles.card}>
          <div className={styles.num}>3.2×</div>
          <div className={styles.label}>Faster revision speed</div>
        </div>

        <div className={styles.card}>
          <div className={styles.num}>8,200+</div>
          <div className={styles.label}>Active registered students</div>
        </div>

        <div className={styles.card}>
          <div className={styles.num}>50K+</div>
          <div className={styles.label}>Questions with explanations</div>
        </div>

      </div>
    </section>
  );
};

export default Outcomes;
