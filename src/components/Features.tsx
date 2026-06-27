import styles from './Features.module.css';
import { Book, Clock, BarChart2, Lightbulb, Bookmark, FileText } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className={`section-pad ${styles.features}`} id="features">
      
      <div className={styles.head}>
        <div className="section-label">Features</div>
        <h2>Everything you need.<br/>Nothing you don't.</h2>
        <p className="section-sub">
          A focused toolkit built around how APPSC Group 1 & 2 toppers actually prepare — not a generic study app.
        </p>
      </div>

      <div className={styles.grid}>
        
        <div className={styles.card}>
          <div className={`${styles.icon} ${styles.green}`}>
            <Book size={20} strokeWidth={2} />
          </div>
          <h3>Topic-wise question bank</h3>
          <p>Drill into any topic with 100s of questions organized exactly as per Group 1 & 2 syllabus.</p>
        </div>

        <div className={styles.card}>
          <div className={`${styles.icon} ${styles.amber}`}>
            <Clock size={20} strokeWidth={2} />
          </div>
          <h3>Timed mock tests</h3>
          <p>Simulate real exam pressure with full-length mocks. Auto-submit when time ends.</p>
        </div>

        <div className={styles.card}>
          <div className={`${styles.icon} ${styles.blue}`}>
            <BarChart2 size={20} strokeWidth={2} />
          </div>
          <h3>Performance analytics</h3>
          <p>Know exactly where you're losing marks. Accuracy graphs, weak topic flags, score trends.</p>
        </div>

        <div className={styles.card}>
          <div className={`${styles.icon} ${styles.green}`}>
            <Lightbulb size={20} strokeWidth={2} />
          </div>
          <h3>Detailed explanations</h3>
          <p>Every question has a thorough explanation — not just the answer, but the reasoning.</p>
        </div>

        <div className={styles.card}>
          <div className={`${styles.icon} ${styles.amber}`}>
            <Bookmark size={20} strokeWidth={2} />
          </div>
          <h3>Bookmark & review</h3>
          <p>Save tricky questions for later. Synced across devices.</p>
        </div>

        <div className={styles.card}>
          <div className={`${styles.icon} ${styles.blue}`}>
            <FileText size={20} strokeWidth={2} />
          </div>
          <h3>Previous year papers</h3>
          <p>Practice directly from past APPSC Group 1 and 2 papers by year.</p>
        </div>

      </div>
    </section>
  );
};

export default Features;
