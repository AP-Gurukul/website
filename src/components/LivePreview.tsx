import React, { useState } from 'react';
import styles from './LivePreview.module.css';
import { ArrowRight, Clock } from 'lucide-react';

const LivePreview: React.FC = () => {
  const [hoveredOption, setHoveredOption] = useState<number | null>(null);

  return (
    <section className={`section-pad ${styles.preview}`} id="preview">
      <div className={styles.grid}>
        
        <div className={styles.text}>
          <div className="section-label">Live preview</div>
          <h2>Questions that<br/>feel like the<br/>real exam.</h2>
          <p>
            Every question is sourced from previous papers or crafted by subject experts to match APPSC Group 1 & 2 difficulty. Explanations are clear, concise, and focused on building concepts.
          </p>
          <a href="#cta" className={styles.btnPrimary}>
            Try a free test <ArrowRight size={16} />
          </a>
        </div>

        <div className={styles.card}>
          <div className={styles.meta}>
            <span className={styles.pill}>AP History</span>
            <span className={styles.pill}>Group 1 — 2022</span>
            <span className={styles.pill}>Medium</span>
          </div>

          <div className={styles.questionText}>
            Who founded the Vijayanagara Empire in 1336 CE, and in which present-day state is Hampi located?
          </div>

          <div className={styles.options}>
            <div 
              className={`${styles.option} ${hoveredOption === 0 ? styles.hovered : ''}`}
              onMouseEnter={() => setHoveredOption(0)}
              onMouseLeave={() => setHoveredOption(null)}
            >
              <span className={styles.letter}>A</span>
              <span className={styles.optionText}>Krishna Deva Raya, Andhra Pradesh</span>
            </div>
            
            <div 
              className={`${styles.option} ${hoveredOption === 1 ? styles.hovered : ''}`}
              onMouseEnter={() => setHoveredOption(1)}
              onMouseLeave={() => setHoveredOption(null)}
            >
              <span className={styles.letter}>B</span>
              <span className={styles.optionText}>Bukka Raya I, Tamil Nadu</span>
            </div>

            <div className={`${styles.option} ${styles.correct}`}>
              <span className={styles.letter}>C</span>
              <span className={styles.optionText}>Harihara I & Bukka I, Karnataka</span>
            </div>

            <div 
              className={`${styles.option} ${hoveredOption === 3 ? styles.hovered : ''}`}
              onMouseEnter={() => setHoveredOption(3)}
              onMouseLeave={() => setHoveredOption(null)}
            >
              <span className={styles.letter}>D</span>
              <span className={styles.optionText}>Deva Raya II, Maharashtra</span>
            </div>
          </div>

          <div className={styles.bottom}>
            <span className={styles.counter}>1 of 100 questions</span>
            <span className={styles.timer}><Clock size={14} className={styles.timerIcon} /> 1:24 remaining</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LivePreview;
