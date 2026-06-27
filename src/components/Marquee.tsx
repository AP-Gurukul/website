import React from 'react';
import styles from './Marquee.module.css';

const exams = [
  "Group 1 Prelims",
  "Group 1 Mains",
  "Group 2 Prelims",
  "Group 2 Mains",
  "AP History Core",
  "Indian Polity",
  "AP Economy",
  "Science & Tech"
];

const Marquee: React.FC = () => {
  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {/* Render two sets of items for seamless infinite scroll */}
        {[...exams, ...exams].map((exam, index) => (
          <div key={index} className={styles.item}>
            <strong>{exam}</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
