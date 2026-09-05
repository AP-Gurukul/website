import React from 'react';
import styles from './Features.module.css';
import { Book, CalendarCheck, Lightbulb, Users, Bell, ShieldCheck } from 'lucide-react';

// These describe what the Telegram group actually does today.
//
// The previous six cards advertised timed mock tests, performance analytics
// with accuracy graphs, a syllabus tracker with completion percentages, and
// previous-year papers by year. Those belonged to a mobile app that is no
// longer being built. Selling a Telegram pass while advertising an analytics
// dashboard is a promise nobody can keep, and it is the first thing a payment
// reviewer compares against the product.

const Features: React.FC = () => {
  return (
    <section className={`section-pad ${styles.features}`} id="features">

      <div className={styles.head}>
        <div className="section-label">What you get</div>
        <h2>Everything you need.<br/>Nothing you don't.</h2>
        <p className="section-sub">
          A private group built around how APPSC Group 1 &amp; 2 aspirants actually revise —
          consistent daily practice, not another dashboard to maintain.
        </p>
      </div>

      <div className={styles.grid}>

        <div className={styles.card}>
          <div className={`${styles.icon} ${styles.green}`}>
            <CalendarCheck size={20} strokeWidth={2} />
          </div>
          <h3>A question every day</h3>
          <p>New practice questions posted daily to the group, so revision becomes a habit rather than a weekend scramble.</p>
        </div>

        <div className={styles.card}>
          <div className={`${styles.icon} ${styles.amber}`}>
            <Lightbulb size={20} strokeWidth={2} />
          </div>
          <h3>Detailed explanations</h3>
          <p>Every question carries a thorough explanation — not just the answer, but the reasoning behind it.</p>
        </div>

        <div className={styles.card}>
          <div className={`${styles.icon} ${styles.blue}`}>
            <Book size={20} strokeWidth={2} />
          </div>
          <h3>Full syllabus coverage</h3>
          <p>Questions span every Group 1 &amp; 2 subject, from AP History and Polity through to Science &amp; Technology.</p>
        </div>

        <div className={styles.card}>
          <div className={`${styles.icon} ${styles.green}`}>
            <Users size={20} strokeWidth={2} />
          </div>
          <h3>A focused group</h3>
          <p>Members only, moderated, and free of the forwards and noise that make open study groups unusable.</p>
        </div>

        <div className={styles.card}>
          <div className={`${styles.icon} ${styles.amber}`}>
            <Bell size={20} strokeWidth={2} />
          </div>
          <h3>Expiry reminders</h3>
          <p>We tell you before your pass ends, so access never lapses in the middle of your preparation.</p>
        </div>

        <div className={styles.card}>
          <div className={`${styles.icon} ${styles.blue}`}>
            <ShieldCheck size={20} strokeWidth={2} />
          </div>
          <h3>Secure payments</h3>
          <p>Checkout is handled entirely by Razorpay. We never see or store your card, UPI or bank details.</p>
        </div>

      </div>
    </section>
  );
};

export default Features;
