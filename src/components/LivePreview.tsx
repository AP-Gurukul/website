import React, { useState } from 'react';
import styles from './LivePreview.module.css';
import { ArrowRight, Clock } from 'lucide-react';

const quizOptions = [
  "Krishna Deva Raya, Andhra Pradesh",
  "Bukka Raya I, Tamil Nadu",
  "Harihara I & Bukka I, Karnataka",
  "Deva Raya II, Maharashtra"
];
const correctAnswerIndex = 2; // Option C

const LivePreview: React.FC = () => {
  const [hoveredOption, setHoveredOption] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionClick = (index: number) => {
    // Only allow selection once for the preview
    if (selectedOption === null) {
      setSelectedOption(index);
    }
  };

  const getOptionClass = (index: number) => {
    if (selectedOption === null) {
      return hoveredOption === index ? styles.hovered : '';
    }
    if (index === correctAnswerIndex) {
      return styles.correct;
    }
    if (index === selectedOption && index !== correctAnswerIndex) {
      return styles.incorrect;
    }
    return styles.dimmed;
  };

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
            {quizOptions.map((opt, index) => (
              <div 
                key={index}
                className={`${styles.option} ${getOptionClass(index)}`}
                onMouseEnter={() => setHoveredOption(index)}
                onMouseLeave={() => setHoveredOption(null)}
                onClick={() => handleOptionClick(index)}
              >
                <span className={styles.letter}>{String.fromCharCode(65 + index)}</span>
                <span className={styles.optionText}>{opt}</span>
              </div>
            ))}
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
