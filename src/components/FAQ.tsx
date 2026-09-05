import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Which APPSC exams does this cover?",
    answer: "Group 1 and Group 2. Questions follow the syllabus for the latest APPSC notifications for those groups."
  },
  {
    question: "How do I get access after paying?",
    answer: "Send /start to our Telegram bot, pick a pass and pay through Razorpay. A single-use invite link to the private group reaches you on Telegram straight away. Telegram does not let a bot message you first, so you do need to message it once before it can send your link."
  },
  {
    question: "Is the content in Telugu or English?",
    answer: "English currently. Telugu support is planned."
  },
  {
    question: "How often are questions posted?",
    answer: "Every day, to the private group. You can check how many days of access you have left at any time by sending /status to the bot."
  },
  {
    question: "Can I cancel the monthly pass?",
    answer: "Yes. Send /cancel to the bot at any time. That stops all future billing, and you keep access until the end of the period you have already paid for."
  },
  {
    question: "Is there a refund policy?",
    answer: "All sales are final. Since access is digital and delivered immediately, we do not offer refunds once a purchase is made. We do correct our own billing errors, such as a duplicate charge. See the Refund & Cancellation Policy for details."
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
