import styles from './Subjects.module.css';

const Subjects: React.FC = () => {
  return (
    <section className={`section-pad ${styles.subjects}`} id="subjects">
      
      <div className={styles.head}>
        <div>
          <div className="section-label">Syllabus coverage</div>
          <h2>APPSC Group 1 & 2.<br/>Covered completely.</h2>
        </div>
        <p className={styles.headRight}>
          Comprehensive coverage across every exam category for Group 1 & 2 — from AP History to Science & Technology.
        </p>
      </div>

      <div className={styles.grid}>
        
        <div className={styles.card}>
          <div className={styles.count}>6,200+</div>
          <div className={styles.name}>General Studies & Current Affairs</div>
          <span className={`${styles.badge} ${styles.green}`}>Core</span>
        </div>

        <div className={styles.card}>
          <div className={styles.count}>4,800+</div>
          <div className={styles.name}>AP History & Culture</div>
          <span className={`${styles.badge} ${styles.blue}`}>AP Specific</span>
        </div>

        <div className={styles.card}>
          <div className={styles.count}>5,100+</div>
          <div className={styles.name}>Indian Polity & Governance</div>
          <span className={`${styles.badge} ${styles.green}`}>Core</span>
        </div>

        <div className={styles.card}>
          <div className={styles.count}>3,900+</div>
          <div className={styles.name}>Geography — India & AP</div>
          <span className={`${styles.badge} ${styles.green}`}>Core</span>
        </div>

        <div className={styles.card}>
          <div className={styles.count}>4,400+</div>
          <div className={styles.name}>AP Economy & Planning</div>
          <span className={`${styles.badge} ${styles.amber}`}>Important</span>
        </div>

        <div className={styles.card}>
          <div className={styles.count}>3,300+</div>
          <div className={styles.name}>Science & Technology</div>
          <span className={`${styles.badge} ${styles.blue}`}>Group 1</span>
        </div>

        <div className={styles.card}>
          <div className={styles.count}>2,800+</div>
          <div className={styles.name}>Mental Ability & Reasoning</div>
          <span className={`${styles.badge} ${styles.amber}`}>Important</span>
        </div>

        <div className={styles.card}>
          <div className={styles.count}>2,200+</div>
          <div className={styles.name}>Indian Society</div>
          <span className={`${styles.badge} ${styles.blue}`}>Group 2</span>
        </div>

      </div>
    </section>
  );
};

export default Subjects;
