import React from 'react';
import styles from './Pricing.module.css';
import { CheckCircle2 } from 'lucide-react';
import { PLANS, BOT_URL } from '../config';

// Prices and plan names come from src/config.ts, which is kept in step with
// src/plans.js in the bot repo — the file the Razorpay checkout actually reads.
// Nothing here is typed in by hand, so the site cannot advertise an amount the
// student is not charged.

const Pricing: React.FC = () => {
  return (
    <section className={`section-pad ${styles.pricing}`} id="pricing">

      <div className={styles.head}>
        <div className="section-label">Passes</div>
        <h2>Simple, honest pricing.</h2>
        <p className="section-sub">
          Every pass unlocks the same private Telegram group. They differ only in how long access lasts.
        </p>
      </div>

      <div className={styles.grid}>
        {PLANS.map((plan) => (
          <div
            key={plan.id}
            className={plan.featured ? `${styles.card} ${styles.featured}` : styles.card}
          >
            <div className={styles.tag}>{plan.tag}</div>
            <div className={styles.name}>{plan.name}</div>
            <div className={styles.price}>
              {plan.price}
              {plan.period === '/month' && <span className={styles.pricePeriod}>/mo</span>}
            </div>
            <div className={styles.period}>{plan.note}</div>

            <hr className={styles.divider} />

            <div className={styles.features}>
              {plan.features.map((feature) => (
                <div className={styles.feature} key={feature}>
                  <CheckCircle2
                    size={16}
                    className={plan.featured ? styles.checkFeatured : styles.check}
                  />{' '}
                  {feature}
                </div>
              ))}
            </div>

            <a
              href={BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={plan.featured ? styles.btnFeatured : styles.btn}
            >
              Buy on Telegram
            </a>
          </div>
        ))}
      </div>

      <p className={styles.footnote}>
        Prices shown are the total payable. Payments are processed securely by Razorpay —
        UPI, cards and net banking accepted. All sales are final; see our{' '}
        <a href="/refund">Refund &amp; Cancellation Policy</a>.
      </p>
    </section>
  );
};

export default Pricing;
