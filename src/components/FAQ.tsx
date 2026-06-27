import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Which APPSC exams does the app cover?",
    answer: "APPSC Sadhana is currently laser-focused on Group 1 and Group 2 exams. The syllabus, mock tests, and question banks are perfectly aligned with the latest APPSC notifications for these specific groups."
  },
  {
    question: "Is the content in Telugu or English?",
    answer: "English currently. Full Telugu support is in active development and will be released in the next major update."
  },
  {
    question: "How often are questions updated?",
    answer: "New questions are added every week by our subject experts. After any official APPSC syllabus update, new relevant questions are added within 48 hours."
  },
  {
    question: "Can I use it offline?",
    answer: "Yes. You can download question sets and practice completely offline. Your performance scores and analytics will sync automatically the next time you connect to the internet."
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes, we offer a full refund within 7 days of purchasing any paid plan, no questions asked."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`section-pad ${styles.faq}`} id="faq">
      
      <div className={styles.head}>
        <div className="section-label">FAQ</div>
        <h2>Quick answers.</h2>
      </div>

      <div className={styles.list}>
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`${styles.item} ${openIndex === index ? styles.active : ''}`}
          >
            <button 
              className={styles.question}
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span>{faq.question}</span>
              <span className={styles.toggle}>
                {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            
            <div 
              className={styles.answer}
              style={{ maxHeight: openIndex === index ? '200px' : '0' }}
            >
              <div className={styles.answerInner}>
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default FAQ;
