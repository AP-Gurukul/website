import { useState } from 'react';
import styles from './LivePreview.module.css';
import { ArrowRight, Clock, Info, Check } from 'lucide-react';

const quizQuestions = [
  {
    meta: ['AP History', 'Group 1 — 2022', 'Medium'],
    text: "Who founded the Vijayanagara Empire in 1336 CE, and in which present-day state is Hampi located?",
    options: [
      "Krishna Deva Raya, Andhra Pradesh",
      "Bukka Raya I, Tamil Nadu",
      "Harihara I & Bukka I, Karnataka",
      "Deva Raya II, Maharashtra"
    ],
    correctIndex: 2, // C
    explanation: "The Vijayanagara Empire was established in 1336 by brothers Harihara I and Bukka Raya I of the Sangama dynasty. Its ruins are located in Hampi, Karnataka, which is a UNESCO World Heritage site."
  },
  {
    meta: ['Indian Polity', 'Group 2 — 2019', 'Hard'],
    text: "Which of the following Articles of the Indian Constitution guarantees the right to freedom of speech and expression?",
    options: [
      "Article 14",
      "Article 21",
      "Article 32",
      "Article 19(1)(a)"
    ],
    correctIndex: 3, // D
    explanation: "Article 19(1)(a) guarantees the right to freedom of speech and expression to all citizens, subject to reasonable restrictions under Article 19(2) regarding sovereignty, security, and public order."
  },
  {
    meta: ['AP Economy', 'Group 1 — 2023', 'Medium'],
    text: "What is the primary objective of the 'Navaratnalu' schemes implemented by the Andhra Pradesh government?",
    options: [
      "Welfare and inclusive growth",
      "Urban infrastructure development",
      "Promoting IT exports",
      "Privatization of public sector units"
    ],
    correctIndex: 0, // A
    explanation: "Navaratnalu is a set of nine welfare schemes aimed at improving the living standards of farmers, women, students, and marginalized sections, ensuring inclusive socio-economic growth."
  },
  {
    meta: ['Geography', 'Group 2 — 2018', 'Easy'],
    text: "Which of the following rivers is often referred to as the 'Lifeline of Andhra Pradesh'?",
    options: [
      "Krishna",
      "Penna",
      "Godavari",
      "Tungabhadra"
    ],
    correctIndex: 2, // C
    explanation: "The Godavari River is known as the lifeline of Andhra Pradesh due to its massive contribution to the state's agriculture, irrigation, and drinking water supply networks."
  },
  {
    meta: ['General Science', 'Group 1 — 2020', 'Medium'],
    text: "Which vitamin deficiency causes the disease 'Scurvy'?",
    options: [
      "Vitamin A",
      "Vitamin C",
      "Vitamin B12",
      "Vitamin D"
    ],
    correctIndex: 1, // B
    explanation: "Scurvy is caused by a severe deficiency of Vitamin C (ascorbic acid), which is essential for collagen synthesis, wound healing, and maintaining healthy gums and blood vessels."
  }
];

const LivePreview: React.FC = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [hoveredOption, setHoveredOption] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const question = quizQuestions[currentQ];

  const handleOptionClick = (index: number) => {
    if (selectedOption === null) {
      setSelectedOption(index);
    }
  };

  const nextQuestion = () => {
    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelectedOption(null);
      setHoveredOption(null);
    } else {
      // Loop back to start or handle end
      setCurrentQ(0);
      setSelectedOption(null);
      setHoveredOption(null);
    }
  };

  const getOptionClass = (index: number) => {
    if (selectedOption === null) {
      return hoveredOption === index ? styles.hovered : '';
    }
    if (index === question.correctIndex) {
      return styles.correct;
    }
    if (index === selectedOption && index !== question.correctIndex) {
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
            {question.meta.map((m, i) => (
              <span key={i} className={styles.pill}>{m}</span>
            ))}
          </div>

          <div className={styles.questionText}>
            {question.text}
          </div>

          <div className={styles.options}>
            {question.options.map((opt, index) => {
              const isSelected = selectedOption !== null;
              const isCorrect = index === question.correctIndex;
              return (
                <div 
                  key={index}
                  className={`${styles.option} ${getOptionClass(index)}`}
                  onMouseEnter={() => setHoveredOption(index)}
                  onMouseLeave={() => setHoveredOption(null)}
                  onClick={() => handleOptionClick(index)}
                >
                  <span className={styles.letter}>
                    {(isSelected && isCorrect) ? <Check size={14} /> : String.fromCharCode(65 + index)}
                  </span>
                  <span className={styles.optionText}>{opt}</span>
                </div>
              );
            })}
          </div>

          {selectedOption !== null && (
            <div className={`${styles.explanation} animate-fade-in-up`}>
              <div className={styles.explHeader}>
                <Info size={16} /> Explanation
              </div>
              <p>{question.explanation}</p>
            </div>
          )}

          <div className={styles.bottom}>
            <span className={styles.counter}>{currentQ + 1} of {quizQuestions.length} questions</span>
            <div className={styles.bottomRight}>
              {selectedOption !== null ? (
                <button className={styles.btnNext} onClick={nextQuestion}>
                  Next <ArrowRight size={16} />
                </button>
              ) : (
                <span className={styles.timer}><Clock size={14} className={styles.timerIcon} /> 1:24 remaining</span>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LivePreview;
