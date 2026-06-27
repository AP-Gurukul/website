import React from 'react';
import styles from './AppShowcase.module.css';

const screens = [
  {
    id: 1,
    title: 'Performance Analytics',
    desc: 'Deep dive into your accuracy, speed, and topic-wise strengths.',
    imgSrc: '/performance-analytics.png', // User can drop this in public folder
  },
  {
    id: 2,
    title: 'Subject Analysis',
    desc: 'See exactly where you are losing marks across all subjects.',
    imgSrc: '/subject-analysis.png',
  },
  {
    id: 3,
    title: 'AI Rank Predictor',
    desc: 'Predict your final APPSC rank based on current trajectory.',
    imgSrc: '/rank-predictor.png',
  },
  {
    id: 4,
    title: 'Syllabus Tracker',
    desc: 'Check off topics as you learn and track completion visually.',
    imgSrc: '/syllabus-tracker.png',
  },
];

const AppShowcase: React.FC = () => {
  return (
    <section className={`section-pad ${styles.showcase}`} id="app-showcase">
      <div className={styles.head}>
        <div className="section-label">Inside the App</div>
        <h2>Designed to give you<br/>the winning edge.</h2>
        <p className={styles.sub}>
          Experience a world-class interface that makes tracking your progress, finding your weak points, and improving your score effortless.
        </p>
      </div>

      <div className={styles.scrollContainer}>
        {screens.map((screen) => (
          <div key={screen.id} className={styles.phoneWrapper}>
            <div className={styles.phoneFrame}>
              <div className={styles.screen}>
                {/* Fallback gradient if image isn't available yet */}
                <div className={styles.placeholderGradient}>
                  Upload {screen.imgSrc} to public/ folder
                </div>
                {/* Real Image (absolutely positioned to cover placeholder if it loads) */}
                <img 
                  src={screen.imgSrc} 
                  alt={screen.title} 
                  style={{ position: 'absolute', top: 0, left: 0 }}
                  onError={(e) => {
                    // Hide broken image icon if image doesn't exist yet
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            </div>
            <div className={styles.caption}>
              <h3>{screen.title}</h3>
              <p>{screen.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppShowcase;
